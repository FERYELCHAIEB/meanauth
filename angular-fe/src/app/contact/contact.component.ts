import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from'@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm : FormGroup
  constructor(private fb:FormBuilder) {
    let control ={
    usern : new FormControl('',[Validators.required,Validators.pattern("[a-z]*")]),
    mail : new FormControl('',[Validators.required,Validators.email]),
    msg : new FormControl('',[Validators.required]),
    
   }
   this.contactForm = this.fb.group(control);
  

  }
  get username(){return this.contactForm.get('usern')}
  get email(){return this.contactForm.get('mail')}
  get message(){return this.contactForm.get('msg')}
 
  ngOnInit(): void {
  }

}