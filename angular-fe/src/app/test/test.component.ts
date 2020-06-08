import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
}) 
export class TestComponent implements OnInit {

  
  users = []

  constructor(private userService:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result=>{
        this.users = result
      },
      error=>{
        console.log(error);
      }
    )
  }

 //suppression function
 supprim(user) {
  let index = this.users.indexOf(user);
  this.users.splice(index, 1);
  this.userService.supprimUser(user._id).subscribe(
    res=>{
      this.toastr.error(res.msg);
    },
    err =>{
      console.log(err);
    }
  )
  
 }
}
