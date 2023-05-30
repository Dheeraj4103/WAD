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
    // this.signupUsers = [] 
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
      // alert("Login Successfull !!");
      const h1 = document.createElement('h1');
      h1.innerText = "Profile Page";
      const username = document.createElement('h2');
      username.innerText = `Username: ${isUserExist.username}`;
      const email = document.createElement('h2');
      email.innerText = `Username: ${isUserExist.email}`;
      const profile = document.createElement('div');
      profile.appendChild(h1);
      profile.appendChild(username);
      profile.appendChild(email)
      document.write(profile.innerHTML || "LoginSuccessful")

    } else {
      alert("Wrong Credentials");
    }
  }
}
