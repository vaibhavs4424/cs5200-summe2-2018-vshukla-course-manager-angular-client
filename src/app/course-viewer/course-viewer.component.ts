import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../model/course.model.client';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient,
              private route: ActivatedRoute,
              private normalrouter: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  lessons = [];
  topics = [];
  courses = [];
  modules = [];
  widgets = [];
  course: Course = new Course();


  setParams(params) {
    // this.courseId = params['courseId'];
    // this.moduleId = params['moduleId'];
    // this.lessonId = params['lessonId'];
    // this.topicId = params['topicId'];
    // this.loadCourses();
    // this.loadModules(this.courseId);
    // this.loadLessons(this.courseId, this.moduleId);
    // this.loadTopics(this.courseId, this.moduleId, this.lessonId);
  }

  loadCourses() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  loadModules(courseId) {
    this.courseId = courseId;
    this.service.findAllModulesForCourses(courseId)
      .then(modules => this.modules = modules);

  }

  loadLessons(courseId, moduleId) {
    this.courseId = courseId;
    this.moduleId = moduleId;
    console.log(moduleId);
    this.service.findAllLessonsForModule(courseId, moduleId)
      .then(lessons => this.lessons = lessons);
  }

  loadTopics(courseId, moduleId, lessonId) {
    this.courseId = courseId;
    this.moduleId = moduleId;
    this.lessonId = lessonId;
    console.log(moduleId);
    this.service.findAllTopicsForLesson(courseId, moduleId, lessonId)
      .then(topics => this.topics = topics);
  }

  loadWidgets(courseId, moduleId, lessonId, topicId) {
    this.topicId = topicId;
    console.log('test topic id:' + topicId);
    this.service.findAllWidgets(courseId, moduleId, lessonId, topicId)
      .then(widgets => {
        this.widgets = widgets;
        console.log(widgets);
      });
  }


  home() {
    this.normalrouter.navigate(['home']);
  }

  ngOnInit() {
    this.loadCourses();
  }

}
