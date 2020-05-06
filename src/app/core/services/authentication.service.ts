import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { ApiService } from './api.service';
import { JwtStorageService } from './jwt-storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user:User;
  constructor(private apiService:ApiService,private jwtStorageService:JwtStorageService) { }
  private decodeToken():User {
    const token = this.jwtStorageService.getToken();
    if(!token||new JwtHelperService().isTokenExpired(token)){
      this.logout();
      return null;
    }
    const decodedToken = new JwtHelperService().decodeToken(token);
    this.user = decodedToken;
    return this.user;
  }
  
  getUserFullName():string {
    if(this.decodeToken()!=null){
      const decodedToken = this.decodeToken();
      const userName = decodedToken.family_name+' '+decodedToken.given_name;
      return userName;
    }
  }
  
  login(userLogin:Login):Observable<boolean>{
    return this.apiService.create("account/login",userLogin)
    .pipe( 
      map(response=>{
        if(response){
          this.jwtStorageService.saveToken(response.token);
          return true;
        }
        return false;
      })
    );
  }

  logout(){
    this.jwtStorageService.destroyToken();
  }


}
