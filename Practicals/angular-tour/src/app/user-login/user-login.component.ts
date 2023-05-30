import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('userinfo');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers = []
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('userinfo', JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: '',
      email: '',
      password: ''
    }
  }
  onLogin() {
    const isUserExist = this.signupUsers.find(m => 
      m.username == this.loginObj.username && m.password == this.loginObj.password
    );
    console.log(this.signupUsers, this.loginObj)
    if (isUserExist != undefined) {
      alert("Login Successfull !!");
    } else {
      alert("Wrong Credentials");
    }
  }
}
