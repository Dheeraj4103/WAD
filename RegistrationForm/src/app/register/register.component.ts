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
    console.log("You have entered:- ", result.value.email);
    localStorage.setItem("username", result.value.email);
    localStorage.setItem("password", result.value.password);
    console.log(localStorage);
    
  }
  toggle() {
    this.show = false;
  }
  
}
