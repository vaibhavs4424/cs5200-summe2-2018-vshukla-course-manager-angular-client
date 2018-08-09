import {Component, OnInit} from '@angular/core';
import {UserServiceCleint} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {Router} from '@angular/router';
import {User} from '../model/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceCleint,
              private sectionService: SectionServiceClient,
              private router: Router) {
  }

  user: User = new User();
  sections = [];

  ngOnInit() {
    this.service.profile()
      .then(user => {
        this.user = user;
        console.log(user._id);


        this.service.findUserById(user._id)
          .then(newuser => {
            this.user = newuser;
            console.log('user');
            console.log(this.user);
          });
      });
    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        this.sections = sections;
        console.log(sections[0].section);
      });
  }

  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['login']));
  }

  home() {
    this.router.navigate(['home']);
  }

  admin() {
    this.router.navigate(['admin']);
  }

  courseNavigator() {
    this.router.navigate(['course']);
  }

  update(user: User) {
    console.log(user);
    this.service.updateProfile(user.username, user.password, user.firstName, user.lastName, user.email)
      .then(() => console.log('update'));
  }

}
