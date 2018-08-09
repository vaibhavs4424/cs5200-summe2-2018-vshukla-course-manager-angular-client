import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceCleint} from '../services/user.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceCleint) {
  }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }

  login() {
    this.router.navigate(['login']);
  }

}
