const express = require('express');
const router = express.Router();
const User =require('../models/user');
const Asso =require('../models/association');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Annonces =require('../models/annonce');
const Reservation =require('../models/reservation');

// route inscription
router.post('/inscription',(req,res,next)=>{ 
   let newUser = new User({
    nom:req.body.nom,
    prenom:req.body.prenom,
    email:req.body.email,
    tel:req.body.tel,
    gouve:req.body.gouve,
    pass:req.body.pass
   });
   User.addUser(newUser,(err,user)=>{
    if(err){
        res.json({success:false, msg:'creation de compte est échouée'});
    }
    else {res.json({success:true, msg:'creation de compte avec succès'});  }
    
    });
});
 //*********************delete routes*****************
 router.delete('/suppUser/:id',(req,res,next)=>{
     User.findByIdAndRemove({_id:req.params.id}).then((user)=>{
        res.json({success:true, msg:'suppression de compte avec succès'});  
     });
 });
// route connexion
router.post('/connexion',(req,res,next)=>{
   const email=  req.body.email;
   const  pass=  req.body.pass ;
   
   User.getUserByEmail(email,(err,user)=>{
       
    if (err)throw err;

if(!user){res.json({success:false, msg:'utilisateur non reconnu'}); };

User.comparePass(pass,user.pass,(err,isMatch)=>{
   if (err)throw err;
   
   if (isMatch){
       const token = jwt.sign(user.toJSON(),config.secret,{
           expiresIn:604800 });
    res.json({
        success:true,
        token:'JWT '+token,
        user:{
          id:user._id ,
          nom:user.nom,
          prenom:user.prenom,
          email:user.email,
          tel:user.tel,
         gouve:user.gouve
        }
    }); 
    
   }
  else{res.json({success:false, msg:'mot de passe incorrect'}); }   
});

   });
   
 
});

router.post('/association',(req,res,next)=>{ 
    let AssoUser = new Asso({
     nom:req.body.nom,
     prenom:req.body.prenom,
     email:req.body.email,
     tel:req.body.tel,
     gouvernorat:req.body.gouvernorat,
     pass:req.body.pass,
     nomA:req.body.nomA,
     domaine:req.body.domaine,
     emailA:req.body.emailA,
     telA:req.body.telA,
     gouvernoratA:req.body.gouvernoratA,
     statut:req.body.statut,
     adresse:req.body.adresse
     
    });
   Asso.addUser(AssoUser,(err,user)=>{
     if(err){
         res.json({success:false, msg:'creation de compte est échouée'});
     }
     else {res.json({success:true, msg:'creation de compte avec succès'});  }
     
     });
 });
 //connexion asso
 router.post('/connexionAN',(req,res,next)=>{
    const email=  req.body.email;
    const  pass=  req.body.pass ;
    
    Asso.getUserByEmail(email,(err,user)=>{
        
     if (err)throw err;
 
 if(!user){res.json({success:false, msg:'utilisateur non reconnu'}); };
 
 Asso.comparePass(pass,user.pass,(err,isMatch)=>{
    if (err)throw err;
    
    if (isMatch){
        const token = jwt.sign(user.toJSON(),config.secret,{
            expiresIn:604800 });
     res.json({
         success:true,
         token:'JWT '+token,
         user:{
           id:user._id ,
           nom:user.nom,
           prenom:user.prenom,
           email:user.email,
           tel:user.tel 
         }
     }); 
     
    }
   else{res.json({success:false, msg:'mot de passe incorrect'}); }   
 });
 
    });
    
  
 });
// route profil
router.get('/profil',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json({user:req.user});
});

router.get('/getUsers',(req,res)=>{
   User.find(function(err,callback){
       if (err){res.send(err);}
       res.send(callback);
   })
})

// route Annonce
router.post('/annonce',(req,res,next)=>{ 
    let newAn = new Annonces({
     gouv:req.body.gouv,
     code:req.body.code,
     tel:req.body.tel,
     titre:req.body.titre,
     texte:req.body.texte
     
    });
    Annonces.addAnnonces(newAn,(err,annonce)=>{
     if(err){
         res.json({success:false, msg:'creation de cette annonce est échouée'});
     }
     else {res.json({success:true, msg:'creation de cette annonce avec succès'});  }
     
     });
 });
 //route get ll annonce
 router.get('/getAnnonces',(req,res)=>{
    Annonces.find(function(err,callback){
        if (err){res.send(err);}
        res.send(callback);
    })
 })
// route reservation
router.post('/reservation',(req,res,next)=>{ 
    let newres = new Reservation({
    nometprenom:req.body.nometprenom,
    email:req.body.email,
    dated:req.body.dated,
    datef:req.body.datef
     
    });
    Reservation.addReservation(newres,(err,reservation)=>{
     if(err){
         res.json({success:false, msg:'reservation échouée'});
     }
     else {res.json({success:true, msg:'reservation validée'});  }
     
     });
 });
module.exports = router;