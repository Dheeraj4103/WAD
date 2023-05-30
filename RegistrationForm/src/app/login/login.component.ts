import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  public showlg: boolean = true;
  public goToProfile: boolean = false;
  ngOnInit(): void {
      
  }
  submit(result: any) {
    if (result.value.username === localStorage.getItem('username') && result.value.password === localStorage.getItem('password')) {
      alert("Login Successful....");
    } else {
      alert("Login Failed ...");
    }
    
    
    
  }
  toggle() {
    this.showlg = false;
  }
}
