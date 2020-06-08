const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config =require('../config/database');
//schema ta3 association
const AssoSchema = mongoose.Schema({
    nom : {
        type: String,
        require:true
    }
    ,
    prenom : {
        type: String,
        require:true
    }
    ,
    email : {
        type:String,
        require:true
    }
    ,
    tel : {
        type:String,
        require:true
    }
    ,
    gouvernorat : {
        type:String,
        require:true
    }
    ,
    pass : {
        type:String,
        require:true
    }
    ,
    nomA : {
        type:String,
        require:true,
        min:3
    }
    ,
    domaine : {
        type:String,
        require:true
    }
    ,
    emailA : {
        type:String,
         require:true
    }
    ,
    telA : {
        type:String,
        require:true
    }
    ,
  gouvernoratA : {
       type:String,
       require:true

    }
    ,
    statut : {
        type:String,
        require:true
    }
    ,
    adresse : {
        type:String,
        require:true
    }


});
const Asso = module.exports= mongoose.model('Asso',AssoSchema);
module.exports.getUserById = function(id,callback){
    Asso.findById(id,callback);
}

module.exports.getUserByEmail = function(email,callback){
   
   const query = {email: email}
    Asso.findOne(query,callback);
}

module.exports.addUser = function(AssoUser,callback){ 
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(AssoUser.pass,salt,(err,hash)=>{
        if (err) throw err;
        AssoUser.pass = hash;
            AssoUser.save(callback);
        });
    });
}
module.exports.comparePass = function(userPass,hash,callback){
    bcrypt.compare(userPass,hash,(err,isMatch)=>{
       if (err)throw err;
       callback(null,isMatch) ;
    });
    }