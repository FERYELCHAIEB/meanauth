import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators}from'@angular/forms';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
 loginForm: FormGroup;
  constructor(private fb:FormBuilder) { 
   let  formControls ={
     email: new FormControl('',[
       Validators.required,
       Validators.email
     ]),
     pass:new FormControl('',[ 
       Validators.required
       
     ])
   }
   this.loginForm = this.fb.group(formControls);
  }
  get email(){ return this.loginForm.get('email');}

get pass(){ return this.loginForm.get('pass');}

  ngOnInit(): void {
  }
  
  Connecter(){
    console.log(this.loginForm.value)
  }
}