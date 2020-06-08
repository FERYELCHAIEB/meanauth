import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators}from'@angular/forms';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
  visitForm : FormGroup

  constructor(private fb :FormBuilder) { 
    let formcontrols ={
      nom : new FormControl('',[                    
      Validators.required,
      Validators.minLength(3)  
      ]),
      prenom : new FormControl('',[
        Validators.required,
        Validators.minLength(3)  
        ]), 
      email : new FormControl('',[
        Validators.required,
        Validators.email  
        ]),
      
        tel : new FormControl('',[
          Validators.required,
          Validators.minLength(8) ,
          Validators.maxLength(13),
          Validators.pattern("[0-9,' ']*")  
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
      this.visitForm = this.fb.group(formcontrols);
  }


  get nom(){ return this.visitForm.get('nom');}
get prenom(){ return this.visitForm.get('prenom');}
get email(){ return this.visitForm.get('email');}
get tel(){ return this.visitForm.get('tel');}
get pass(){ return this.visitForm.get('pass');}
get confirmpass(){ return this.visitForm.get('confirmpass');}

  ngOnInit(): void {
  }

}