var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var crypto = require('crypto');
const session = require('express-session');
const fs = require('fs');
const util = require('util');
const nodemailer = require("nodemailer");
const formidable = require("formidable");


var app = express();

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'pisica', //folosit de express session pentru criptarea id-ului de sesiune
  resave: true,
  saveUninitialized: false
}));

app.get('/familiaNoastra', function(req, res) {
  res.render('familiaNoastra', {user: req.session.username});
});


app.get('/index', function(req, res) {
  res.render('index', {user: req.session.username});
});

app.get('/adoptii', function(req, res) {
  res.render('adoptii', {user: req.session.username});
});

app.get('/adoptii_la_distanta', function(req, res) {
  res.render('adoptii_la_distanta', {user: req.session.username});
});


app.get('/donatii_sponsorizari', function(req, res) {
  res.render('donatii_sponsorizari', {user: req.session.username});
});

app.get('/inregistrare_pisica', function(req, res) {
  res.render('inregistrare_pisica', {user: req.session.username});
});

app.get('/login', function(req, res) {
  res.render('login', {user: req.session.username});
});

app.get('/monitorizare', function(req, res) {
  pisici = getJson('pisici.json');
  console.log("a ajuns aici");
  console.log("-------------" + req.session.username);
  res.render('monitorizare', {pisica: pisici.pisici, user: req.session.username});
  
});


app.get('/voluntariat', function(req, res) {
  res.render('voluntariat', {user: req.session.username});
});

function saveJson(ojbJson, numeFisier) {
  let data = JSON.stringify(ojbJson);
  fs.writeFileSync(numeFisier, data);
}

function getJson(numeFisier) {
  let textFisier = fs.readFileSync(numeFisier);
  return JSON.parse(textFisier);
}

app.use(express.static(__dirname));

//setarea folderelor ca statice
app.use('/stylesheets', express.static('stylesheets'));
app.use('/javascripts', express.static('javascripts'));



async function trimiteMail(utilizator, email) {
  let transporter = nodemailer.createTransport({
      service: 'gmail',

      secure: false,
      auth: {
          user: "adopt.meow.contact@gmail.com", //mailul site-ului (de aici se trimite catre user)
          pass: "Adopt me-ow"
      },
      tls: {
          rejectUnauthorized: false//pentru gmail
      }
  });

  //trimitere mail
  let info = await transporter.sendMail({
      from: '"Adopt me-ow!" <adopt.meow.contact@gmail.com>',
      to: email,
      subject: "Utilizator nou",
      text: "Esti inregistrat in familia Adopt me-ow!, " + utilizator,
      html: "<p>Esti inregistrat in familia Adopt me-ow!" + utilizator + "</p>"
  });

  console.log("Mesaj trimis: %s", info.messageId);
}

app.get('/', function(req, res) {
  //res.render('index');
  res.render('index', {utilizator: req.session.username});
})

app.get('/logout', function(req, res) {
  console.log("logout");
  req.session.destroy();//distrug sesiunea cand se intra pe pagina de logout
  console.log("logout2");
  res.render('logout');
});



app.post('/login', function(req, res) {
  var form = new formidable.IncomingForm();
  console.log("login");
  form.parse(req, function(err, fields, files) {
    console.log(fields);
    if (fields.tipForm == "register") {
      console.log("ceva");
      let rawdata = fs.readFileSync("utilizatori.json");
      let jsfis = JSON.parse(rawdata);
      var cipher = crypto.createCipher("aes-128-cbc", "parolapisica");
      var encrypt = cipher.update(fields.parola_signup, 'utf8', 'hex');
      encrypt += cipher.final('hex');
      jsfis.utilizatori.push({
        id: jsfis.lastId,
        username: fields.nume_signup,
        email: fields.email,
        parola: encrypt,
        dataInregistrarii: new Date()
      })
      jsfis.lastId++;
      console.log(jsfis);
      saveJson(jsfis, 'utilizatori.json');
      trimiteMail(fields.nume_signup, fields.email).catch(function(err) {
      console.log(err);
      res.render("login", {user: req.session.username, rsstatus:"ok"}); 
    })
    }
    else 
      if (fields.tipForm == "login") {
        jsfis=getJson('utilizatori.json');
        var cipher = crypto.createCipher('aes-128-cbc', 'parolapisica');//creez un obiect de tip cifru cu algoritmul aes
        var encrypt= cipher.update(fields.password, 'utf8', 'hex');//cifrez parola
        encrypt += cipher.final('hex');//inchid cifrarea (altfel as fi putut adauga text nou cu update ca sa fie cifrat
        let user = jsfis.utilizatori.find(function(x){//caut un user cu acelasi nume dat in formular si aceeasi cifrare a parolei
          console.log()
          return (x.username == fields.nume_signin && x.parola == encrypt);
        });
        if(user){
          
          console.log("####" + user);
          
          console.log("///" + encrypt);
          req.session.utilizator = user;//setez userul ca proprietate a sesiunii
          /*setTimeout(function () {
            console.log("TIME OUT");
            res.redirect('/monitorizare');
          }, 1000);
          */
         res.redirect('/monitorizare');
          //res.render('monitorizare', {user: req.session.username});

        }
        else {
          res.render('login'); 
        }
        
        
        console.log(req.session.utilizator);
        /*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
        //res.render('monitorizare',{user: req.session.username});
    }
  
    console.log("mesaj");
    res.render("login", {user: req.session.username, rsstatus:"ok"}); 
    

  })
})

app.post('/inregistrare_pisica', (req, res) => {
  console.log("inregistrare");
	var form = new formidable.IncomingForm();// obiect de tip form cu care parsez datele venite de la utilizator
	form.parse(req, function(err, fields, files) {
      //parsarea datelor
    console.log('file uploaded : ' + files.picture.path);//verific calea buna in consola
	  var calepicture=(files.picture && files.picture.name!="")?files.picture.name:""; //verific daca exista picture (picture este numele campului din form
    if (fields.tip == "inregistrare_pisica") {
      let rawdata = fs.readFileSync('pisici.json');//citesc fisierul si pun tot textul in rawdata
      let jsfis = JSON.parse(rawdata);//parsez textul si obtin obiectul asociat JSON-ului
      jsfis.pisici.push({
        id: jsfis.lastId, 
        nume: fields.nume, 
        ani: fields.ani, 
        luni: fields.luni, 
        rasa: fields.rasa, 
        /*caracteristici: fields.caracteristici*/
        picture: calepicture, 
        aprobare: fields.radio_value,
        descriere: fields.descriere});//adaug elementul nou
      jsfis.lastId++;//incrementez id-ul ca sa nu am doi studenti cu acelasi id
      console.log(jsfis);
      saveJson(jsfis,'pisici.json')
    }
    
    res.redirect('/monitorizare');
   });

   form.on('fileBegin', function (name, file){
		if(file && file.size){
			file.path = __dirname + '/public/uploads/' + file.name;//inainte de upload setez calea la care va fi uploadat
			console.log("cale:"+ file.path);
		}
    });

    form.on('file', function (name, file){
		if(file && file.size){
			console.log('Uploadat ' + file.name);//la finalul uploadului afisez un mesaj
		}
    });
    
   
});



/*app.post('/', function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {		
		jsfis=getJson('utilizatori.json')
		var cipher = crypto.createCipher('aes-128-cbc', 'parolapisica');//creez un obiect de tip cifru cu algoritmul aes
		var encrypt= cipher.update(fields.password, 'utf8', 'hex');//cifrez parola
		cipher += cipher.final('hex');//inchid cifrarea (altfel as fi putut adauga text nou cu update ca sa fie cifrat
		let user = jsfis.utilizatori.find(function(x){//caut un user cu acelasi nume dat in formular si aceeasi cifrare a parolei
			
			return (x.utilizator == fields.name && x.password == encrypt);
		});
		if(user){
			console.log(user);
			console.log(user.password);
			console.log(encrypt);
			req.session.utilizator = user;//setez userul ca proprietate a sesiunii
		}
		
		console.log(req.session.utilizator);
		afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) 
		res.render('html/index',{user: req.session.username});
	});


}); */



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


console.log("A pornit");