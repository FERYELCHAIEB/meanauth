const mongoose = require('mongoose');
const config =require('../config/database');
//schema reservation
const ResSchema = mongoose.Schema({
    nometprenom:{
         type : String
       
    },
   
    email:{
        type : String
        
    },
    
    dated:{
        type : Date
       
     }
     ,
   
     
     datef:{
        type : Date
        
        }
       

});

const Reservation = module.exports= mongoose.model('Reservation',ResSchema);



module.exports.addReservation = function(newres,callback){ 
   
        newres.save(callback);
       
}