import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators}from '@angular/forms';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
resForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    let controls ={
      usern : new FormControl('',[Validators.required,Validators.pattern("[a-z]*")]),
      mail : new FormControl('',[Validators.required,Validators.email])
    }
    this.resForm = this.fb.group(controls);
  }
  get nomUser(){return this.resForm.get('usern')}
  get email(){return this.resForm.get('mail')}
  ngOnInit(): void {
  }

}

