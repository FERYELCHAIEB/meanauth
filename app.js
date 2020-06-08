//les packges nécessaires
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config =require('./config/database');

//connexion to BD
mongoose.connect(config.database);
// test de connexion à la BD
mongoose.connection.on('connected',()=>{
    console.log('connecté à la BD '+config.database);
    
});
mongoose.connection.on('error',(err)=>{
    console.log('erreur de connexion: '+err);
    
});

// initialiser l'application
const app = express();
const users =require('./routes/users');


//utiliser middleware
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
//si je fais appel /users on accéde au fichiers users.js
app.use('/users',users);
// index route
app.get('/',(req,res)=>{
    res.send('page home')
});
// specifier le port
app.listen(3000, ()=>{
    console.log('server started on port 3000');
    
});

