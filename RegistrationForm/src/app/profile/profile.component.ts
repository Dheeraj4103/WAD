import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor() {
    const name = ` <h1>${localStorage.getItem('firstname')} ${localStorage.getItem('lastname')}</h1>`;
    document.write(name);
    
  }
}
