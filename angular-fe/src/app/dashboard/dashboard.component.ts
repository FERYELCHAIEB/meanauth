import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  annonces = []

  constructor(private userService:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllAnnonces().subscribe(
      result=>{
        this.annonces = result
      },
      error=>{
        console.log(error);
      }
    )
  }

 
}
