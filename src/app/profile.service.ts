import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = 'b30874d803c2affc19be';
  private clientsecret = 'a6427e44f11b88fe653deba8b6d77ba545f8df99';

  constructor(private http:Http) { 
     console.log("service is now ready!");
     this.username = 'Mainafrancis';  
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }

}
