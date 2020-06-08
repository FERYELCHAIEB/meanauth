import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators}from'@angular/forms';

@Component({
  selector: 'app-formes',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  AnForm:FormGroup

  constructor(private fb :FormBuilder) {
    let formcontrols ={
      code : new FormControl('',[
        Validators.required,
        Validators.maxLength(4)
        ]),
        gouv : new FormControl('',[
          Validators.required,
        
          ]),
     
      tel : new FormControl('',[
        Validators.required,
        Validators.minLength(8) ,
        Validators.maxLength(13),
        Validators.pattern("[0-9,' ']*")  
        ]),
        titre : new FormControl('',[
          Validators.required,
          Validators.maxLength(30)  
          ]),
          descri : new FormControl('',[
            Validators.required,
            Validators.maxLength(150) 
            ])
          
   }
   this.AnForm = this.fb.group(formcontrols);
 
  }
get code(){ return this.AnForm.get('code');}
get gouv(){ return this.AnForm.get('gouv')}
get tel(){ return this.AnForm.get('tel');}
get titre(){ return this.AnForm.get('titre');}
get descri(){ return this.AnForm.get('descri');}

  ngOnInit(): void {

}
ass(){
  console.log(this.AnForm.value)
}


}
