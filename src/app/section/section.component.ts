import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceCleint} from '../services/user.service.client';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {


  courseId = '';
  sectionName = '';
  seats = '';
  sections = [];
  isAdmin = true;
  selectedSection;
  currentCourse;
  noUser = false;

  constructor(private route: ActivatedRoute,
              private sectionService: SectionServiceClient,
              private router: Router,
              private courseService: CourseServiceClient,
              private userService: UserServiceCleint) {

    this.route.params.subscribe(params => this.loadSections(params['courseId']));
    this.route.params.subscribe(params => {
      this.courseId = params['courseId'];
      this.courseService.findCourseById(this.courseId)
        .then(course => {
          this.currentCourse = course;
          this.sectionName = course.title + ' Section 1';
        });
    });


    this.userService.profile()
      .then(user => {
        console.log(user._id);
        if (user.id == null) {
          this.noUser = true;
        }

        this.userService.findUserById(user._id)
          .then(newuser => {
            this.isAdmin = newuser.admin;
          });
      });
  }

  loadSections(courseId) {
    this.courseId = courseId;
    this.sectionService.findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    this.sectionService.createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  populateField(id, name, seats) {
    this.sectionName = name;
    this.seats = seats;
    this.selectedSection = id;
  }


  enroll(section) {
    this.sectionService.enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }


  unenroll(section) {
    this.sectionService.unenrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }


  deleteSection(section) {
    this.sectionService.deleteSection(section._id)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }


  editSection(sectionName, seats) {
    this.sectionService.editSection(this.selectedSection, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  ngOnInit() {
  }

}
