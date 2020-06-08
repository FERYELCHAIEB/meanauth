import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators}from'@angular/forms';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  insForm : FormGroup
  constructor(private fb :FormBuilder,
    private userService:UserService,
    private router:Router,
    private toastr: ToastrService) { 

    let formcontrols ={
      nom : new FormControl('',[
      Validators.required,
      Validators.minLength(3)  
      ]),
      prenom : new FormControl('',[
        Validators.required,
        Validators.minLength(3)  
        ]),
      mail : new FormControl('',[
        Validators.required,
        Validators.email  
        ]),
      
        tel : new FormControl('',[
          Validators.required,
          Validators.minLength(8) ,
          Validators.maxLength(10),
          Validators.pattern("[0-9,' ']*")  
          ]),
          gouve : new FormControl('',[
            Validators.required,
            Validators.pattern("[a-z , A-Z]*")  
            ]),
      pass : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z , A-Z ,0-9 , '']*"),
       Validators.minLength(8),
       Validators.maxLength(15) 
        ]),
      confirmpass : new FormControl('',[
        Validators.required,
        Validators.minLength(8)  
        ])

    }
this.insForm = this.fb.group(formcontrols);

}
get nom(){ return this.insForm.get('nom');}
get prenom(){ return this.insForm.get('prenom');}
get email(){ return this.insForm.get('mail');}
get tel(){ return this.insForm.get('tel');}
get gouve(){ return this.insForm.get('gouve');}
get pass(){ return this.insForm.get('pass');}
get confirmpass(){ return this.insForm.get('confirmpass');}

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/profil']);
    } 
  } 
  
  
  
  Inscrire(){
    let data = this.insForm.value;

    let user = new User (data.nom,data.prenom,data.mail,data.tel,data.gouve,data.pass);
    this.userService.inscription(user).subscribe(
      res=>{
       
        
        this.toastr.success(res.msg);
        this.router.navigate(['/connexion']);
      },
      err=>{
        console.log(err);
      }
    )
   
   }
 
}