import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators}from'@angular/forms';
@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})




export class AssociationComponent implements OnInit {
  insForm : FormGroup
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
        ]),
        nomA : new FormControl('',[
          Validators.required,
          Validators.minLength(3)  
          ]),
          domi: new FormControl('',[
            Validators.required,
            Validators.minLength(3)  
            ]),
            emaill : new FormControl('',[
              Validators.required,
              Validators.email  
              ]),
              telA : new FormControl('',[
                Validators.required,
                Validators.minLength(8) ,
                Validators.maxLength(13),
                Validators.pattern("[0-9,' ']*")  
                ]),
                stat : new FormControl('',[
                  Validators.required,
                  Validators.minLength(3)  
                  ]),
                  gouv : new FormControl('',[
                    Validators.required,
                  
                    ]),
                    ad: new FormControl('',[
                      Validators.required,
                      
                      ]),
  

    }
this.insForm = this.fb.group(formcontrols);

}
get nom(){ return this.insForm.get('nom');}
get prenom(){ return this.insForm.get('prenom');}
get email(){ return this.insForm.get('email');}
get tel(){ return this.insForm.get('tel');}
get pass(){ return this.insForm.get('pass');}
get confirmpass(){ return this.insForm.get('confirmpass');}
get nomA(){ return this.insForm.get('nomA');}
get domi(){ return this.insForm.get('domi');}
get emaill(){ return this.insForm.get('emaill');}
get telA(){ return this.insForm.get('telA');}
get stat(){ return this.insForm.get('stat');}
get gouv(){ return this.insForm.get('gouv')}
get ad(){ return this.insForm.get('ad');}

  ngOnInit(): void {
  }
   asso(){
     console.log(this.insForm.value)
   }
 
}