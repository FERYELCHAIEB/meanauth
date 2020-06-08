const mongoose = require('mongoose');
const config =require('../config/database');
//schema annonce
const AnnonceSchema = mongoose.Schema({
    gouv:{
         type : String
       
    },
   
    code:{
        type : String
        
    },
    
    tel:{
        type : String
       
     }
     ,
   
     
     titre:{
        type : String
        
        }
        ,
    
   
        texte:{
            type : String
          
        }
 
   

});


const Annonces = module.exports= mongoose.model('Annonces',AnnonceSchema);



module.exports.addAnnonces = function(newAn,callback){ 
   
        newAn.save(callback);
       
}