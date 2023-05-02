import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor() {
    const div1 = document.getElementById('main');
    console.log(div1);
    div1?.innerHTML || localStorage.getItem('username');
  }
}
