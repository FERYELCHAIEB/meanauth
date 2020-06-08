const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config =require('../config/database');

//schema ll user

const UserSchema = mongoose.Schema({
    nom:{
type : String,
required:true
    },
   
    prenom:{
        type : String,
        required:true
    },
    
    email:{
        type : String,
        required:true
     },
     
     tel:{
        type : String,
        required:true
        },
        gouve:{
            type : String
            
            },
   
        pass:{
            type : String,
            required:true
     }

});

const User = module.exports= mongoose.model('User',UserSchema);

module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}

module.exports.getUserByEmail = function(email,callback){
   
   const query = {email: email}
    User.findOne(query,callback);
}

module.exports.addUser = function(newUser,callback){ 
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.pass,salt,(err,hash)=>{
        if (err) throw err;
            newUser.pass = hash;
        newUser.save(callback);
        });
    });
}
//fonction pour comparer le mot de passe
module.exports.comparePass = function(userPass,hash,callback){
bcrypt.compare(userPass,hash,(err,isMatch)=>{
   if (err)throw err;
   callback(null,isMatch) ;
});
}