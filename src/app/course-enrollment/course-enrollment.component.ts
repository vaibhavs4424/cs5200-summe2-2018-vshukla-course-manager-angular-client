import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceCleint} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {User} from '../model/user.model.client';

@Component({
  selector: 'app-course-enrollment',
  templateUrl: './course-enrollment.component.html',
  styleUrls: ['./course-enrollment.component.css']
})
export class CourseEnrollmentComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private userService: UserServiceCleint,
              private sectionService: SectionServiceClient) {
  }

  courses: Course[] = [];
  enrolledCourses: Course[] = [];
  otherCourses: Course[] = [];
  user: User = new User();
  sections = [];

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
                console.log('user');
                console.log(this.user);
              });
            this.sectionService
              .findSectionsForStudent()
              .then(sections => {
                this.sections = sections;
                if (sections.length === 0) {
                  this.otherCourses = this.courses;
                } else {
                  for (let i = 0; i < this.courses.length; i++) {
                    for (let j = 0; j < this.sections.length; j++) {
                      console.log(this.sections[j]);
                      if (this.sections[j].section.courseId === this.courses[i].id) {
                        this.enrolledCourses.push(this.courses[i]);
                      } else {
                        this.otherCourses.push(this.courses[i]);
                        break;
                      }
                    }
                  }
                }
              });
          });
      });
  }

}
