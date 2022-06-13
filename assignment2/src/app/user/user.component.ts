import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = '';
  usernameStatus = 'No username set';
  isUsernameEmpty = true

  constructor() { }

  ngOnInit(): void {
    this.isUsernameEmpty = true
  }

  onSubmitUser() {
    this.usernameStatus = 'Username is set and the username is '+ this.username
  }

  resetUsername() {
    this.username = ''
    this.isUsernameEmpty = true
    
  }

  changeUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value
    this.isUsernameEmpty = false
  }

}
