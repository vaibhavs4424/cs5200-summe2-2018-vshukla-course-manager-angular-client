import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserServiceCleint } from '../services/user.service.client';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private router: Router, private service: UserServiceCleint) { }

  username;
  password;
  password2;
  isAdmin = false;

  ngOnInit() {
  }

  register(username, password, password2) {
    if ( password !== password2) {
      alert('Passwords do not match');
    } else {
      if ( username === 'admin' && password === 'admin') {
        this.isAdmin = true;
      }
      this.service.createUser(username, password, this.isAdmin)
        .then(() => this.router.navigate(['profile']));
    }
  }
}
