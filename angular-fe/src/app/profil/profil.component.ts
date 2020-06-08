import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
isloggedIn : Boolean;
  constructor(private userService:UserService,private router :Router) { }

  ngOnInit(): void {
    this.isloggedIn= this.userService.isLoggedIn();
  }
  logout(){
    localStorage.removeItem("auth-token");
    this.router.navigate(['/']);

  }

}
