import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course.model.client';
import {User} from '../model/user.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceCleint} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  courseId;
  courses: Course[] = [];
  enrolledCourses: Course[] = [];
  otherCourses: Course[] = [];
  user: User = new User();
  sections = [];

  constructor(private service: CourseServiceClient,
              private userService: UserServiceCleint,
              private sectionService: SectionServiceClient,
              private route: ActivatedRoute,
              private normalrouter: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;

        this.userService.profile()
          .then(user => {
            this.user = user;
            this.userService.findUserById(user._id)
              .then(newuser => {
                this.user = newuser;
              });
          });
        this.sectionService
          .findSectionsForStudent()
          .then(sections => {
            this.sections = sections;

            for (let i = 0; i < this.courses.length; i++) {
              for (let j = 0; j < this.sections.length; j++) {
                console.log(this.sections[j]);
                if (this.sections[j].section.courseId === this.courses[i].id) {
                  this.enrolledCourses.push(this.courses[i]);
                } else {
                  this.otherCourses.push(this.courses[i]);
                }
              }
            }// end of fr
          });
      });
  }


  logout() {
    this.userService
      .logout()
      .then(() => this.normalrouter.navigate(['login']));
  }

  home() {
    this.normalrouter.navigate(['home']);
  }1
}
