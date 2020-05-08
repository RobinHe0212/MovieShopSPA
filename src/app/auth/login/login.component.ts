import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin:Login = {
     password:"",
     email:""
  };
  invalidLogin = false;
  constructor(private authService:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }

login(){
  this.authService.login(this.userLogin).subscribe(
    (response)=>{
      if(response){
       const name = this.authService.getUserFullName();
       console.log(name);
          //navi to Home page
        this.route.navigate(['/']);
      }else{
          this.invalidLogin = true;
          console.log("invalid");
      }
    }
  );
}
}
