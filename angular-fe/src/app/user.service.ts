import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private inscriptionUserUrl="http://localhost:3000/users/inscription";
  private connexionUserUrl="http://localhost:3000/users/connexion";
  private getUsers="http://localhost:3000/users/getUsers";
  private  suppUser = "http://localhost:3000/users/suppUser/";

  private getAnnonces="http://localhost:3000/users/getAnnonces";
  constructor(private http: HttpClient) { }
  inscription(user : User){
    return this.http.post<any>(this.inscriptionUserUrl, user);
  }
  supprimUser(id:String){
    return this.http.delete<any>(this.suppUser+id);
  }
  getAllUsers(){
    return this.http.get<any>(this.getUsers);
  }
  getAllAnnonces(){
    return this.http.get<any>(this.getAnnonces);
  }
  connexion(user : User){
    return this.http.post<any>(this.connexionUserUrl, user);
  }
  isLoggedIn(){

    let token = localStorage.getItem("auth-token");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  
}
