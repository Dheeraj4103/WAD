import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public show:boolean = true;
  ngOnInit(): void {
      
  }
  submit(result: any) {
    // localStorage.clear();
    console.log("You have entered:- ", result.value.email);
    window.localStorage.setItem("username", result.value.email);
    window.localStorage.setItem("firstname", result.value.firstname);
    window.localStorage.setItem("lastname", result.value.lastname);
    window.localStorage.setItem("password", result.value.password);
    console.log(localStorage);
    
  }
  toggle() {
    this.show = false;
  }
  
}
