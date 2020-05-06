import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submitted=false;
  signUpForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  buildForm(){
    this.signUpForm = this.fb.group({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:''
    });
  }

  onSubmit(){
      console.log('submit clicked');
    this.submitted = true;
  }

  ngOnInit(): void {
    this.buildForm();
  }

}
