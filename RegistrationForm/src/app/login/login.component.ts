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
    console.log(localStorage, result.value.username);
    
    
  }
  toggle() {
    this.showlg = false;
  }
}
