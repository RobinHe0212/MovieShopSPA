import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userName:string;
isLoggedIn = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserFullName();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
