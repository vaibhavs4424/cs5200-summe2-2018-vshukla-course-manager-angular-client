import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceCleint} from '../services/user.service.client';
import {until} from 'selenium-webdriver';
import elementIsSelected = until.elementIsSelected;
import {User} from '../model/user.model.client';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  username;
  password;
  user: User = new User();

  constructor(private router: Router,
              private service: UserServiceCleint) {
  }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['home']);
  }

  register() {
    this.router.navigate(['register']);
  }

  login(username, password) {

    this.service.login(username, password)
      .then(user => {
        console.log('login');
        console.log(user);
        this.user = user;
        if (user == null) {
          alert('Invalid Credentials, Try again!');
        } else {
          this.router.navigate(['profile']);
        }

      });

  }
}
