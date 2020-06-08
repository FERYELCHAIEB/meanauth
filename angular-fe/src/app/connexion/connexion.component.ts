import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators}from'@angular/forms';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; 
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  conForm: FormGroup;
  constructor(private fb:FormBuilder,
    private userService:UserService,
    private router:Router,
 
    private toastr: ToastrService) { 
   let  formControls ={
     mail: new FormControl('',[
       Validators.required,
       Validators.email
     ]),
     pass:new FormControl('',[ 
       Validators.required
       
     ])
   }
   this.conForm = this.fb.group(formControls);
  }
  get email(){ return this.conForm.get('mail');}

get pass(){ return this.conForm.get('pass');}

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/profil']);
    } 
    
  
  }
  
  Connecter(){
   
    let data = this.conForm.value;

    let user = new User (null,null,data.mail,null,null,data.pass);
    
    this.userService.connexion(user).subscribe(
      res=>{if(res.success===false)
      { this.toastr.error( res.msg);  this.router.navigate(['/connexion']);}
     
        if(res.success===true)
      {console.log(res);
       let token = res.token;
        localStorage.setItem("auth-token",token);
        this.router.navigate(['/profil']);}
      },
      err=>{
        console.log(err);
        
      }
    )
    
  }
}
