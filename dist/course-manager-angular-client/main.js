(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <button (click)=\"home()\"\n            class=\"btn btn-primary btn-success\">\n      Home\n    </button>\n\n    <button (click)=\"logout()\"\n            class=\"btn btn-primary btn-danger\">\n      Logout\n    </button>\n  </div>\n  <br/>\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">Courses</li>\n        <li [ngClass]=\"{'active': course.id == courseId}\" *ngFor=\"let course of courses\"\n            class=\"list-group-item wbdv\">\n          <a routerLink=\"/course/{{course.id}}/section\">\n            {{course.title}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-8\">\n      <app-section></app-section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user.model.client */ "./src/app/model/user.model.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, userService, sectionService, route, normalrouter) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.sectionService = sectionService;
        this.route = route;
        this.normalrouter = normalrouter;
        this.courses = [];
        this.enrolledCourses = [];
        this.otherCourses = [];
        this.user = new _model_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.sections = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    AdminComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
            _this.userService.profile()
                .then(function (user) {
                _this.user = user;
                _this.userService.findUserById(user._id)
                    .then(function (newuser) {
                    _this.user = newuser;
                });
            });
            _this.sectionService
                .findSectionsForStudent()
                .then(function (sections) {
                _this.sections = sections;
                for (var i = 0; i < _this.courses.length; i++) {
                    for (var j = 0; j < _this.sections.length; j++) {
                        console.log(_this.sections[j]);
                        if (_this.sections[j].section.courseId === _this.courses[i].id) {
                            _this.enrolledCourses.push(_this.courses[i]);
                        }
                        else {
                            _this.otherCourses.push(_this.courses[i]);
                        }
                    }
                } // end of fr
            });
        });
    };
    AdminComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () { return _this.normalrouter.navigate(['login']); });
    };
    AdminComponent.prototype.home = function () {
        this.normalrouter.navigate(['home']);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceCleint"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'course-manager-angular-client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login-user/login-user.component */ "./src/app/login-user/login-user.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./section/section.component */ "./src/app/section/section.component.ts");
/* harmony import */ var _course_enrollment_course_enrollment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./course-enrollment/course-enrollment.component */ "./src/app/course-enrollment/course-enrollment.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");
/* harmony import */ var _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quiz-taker/quiz-taker.component */ "./src/app/quiz-taker/quiz-taker.component.ts");
/* harmony import */ var _essay_question_essay_question_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./essay-question/essay-question.component */ "./src/app/essay-question/essay-question.component.ts");
/* harmony import */ var _fill_blanks_question_fill_blanks_question_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fill-blanks-question/fill-blanks-question.component */ "./src/app/fill-blanks-question/fill-blanks-question.component.ts");
/* harmony import */ var _multiple_choice_question_multiple_choice_question_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./multiple-choice-question/multiple-choice-question.component */ "./src/app/multiple-choice-question/multiple-choice-question.component.ts");
/* harmony import */ var _true_false_question_true_false_question_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./true-false-question/true-false-question.component */ "./src/app/true-false-question/true-false-question.component.ts");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _quiz_submission_quiz_submission_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./quiz-submission/quiz-submission.component */ "./src/app/quiz-submission/quiz-submission.component.ts");
/* harmony import */ var _detail_submission_view_detail_submission_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./detail-submission-view/detail-submission-view.component */ "./src/app/detail-submission-view/detail-submission-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_4__["WhiteBoardComponent"],
                _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_11__["RegisterUserComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_13__["LoginUserComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _section_section_component__WEBPACK_IMPORTED_MODULE_15__["SectionComponent"],
                _course_enrollment_course_enrollment_component__WEBPACK_IMPORTED_MODULE_16__["CourseEnrollmentComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_17__["CourseViewerComponent"],
                _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_18__["QuizListComponent"],
                _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_19__["QuizTakerComponent"],
                _essay_question_essay_question_component__WEBPACK_IMPORTED_MODULE_20__["EssayQuestionComponent"],
                _fill_blanks_question_fill_blanks_question_component__WEBPACK_IMPORTED_MODULE_21__["FillBlanksQuestionComponent"],
                _multiple_choice_question_multiple_choice_question_component__WEBPACK_IMPORTED_MODULE_22__["MultipleChoiceQuestionComponent"],
                _true_false_question_true_false_question_component__WEBPACK_IMPORTED_MODULE_23__["TrueFalseQuestionComponent"],
                _quiz_submission_quiz_submission_component__WEBPACK_IMPORTED_MODULE_25__["QuizSubmissionComponent"],
                _detail_submission_view_detail_submission_view_component__WEBPACK_IMPORTED_MODULE_26__["DetailSubmissionViewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"]
            ],
            providers: [
                _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseNavigatorServiceClient"],
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_6__["CourseServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_7__["WidgetServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__["UserServiceCleint"],
                _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_24__["QuizServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_9__["SectionServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-user/login-user.component */ "./src/app/login-user/login-user.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section/section.component */ "./src/app/section/section.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");
/* harmony import */ var _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-taker/quiz-taker.component */ "./src/app/quiz-taker/quiz-taker.component.ts");
/* harmony import */ var _quiz_submission_quiz_submission_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz-submission/quiz-submission.component */ "./src/app/quiz-submission/quiz-submission.component.ts");
/* harmony import */ var _detail_submission_view_detail_submission_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail-submission-view/detail-submission-view.component */ "./src/app/detail-submission-view/detail-submission-view.component.ts");












var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: 'login', component: _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_4__["LoginUserComponent"] },
    { path: 'course/:courseId/section', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: 'register', component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_2__["RegisterUserComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'enroll/course/:courseId/section', component: _section_section_component__WEBPACK_IMPORTED_MODULE_6__["SectionComponent"] },
    { path: 'course', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_7__["CourseViewerComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_7__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_7__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_7__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_7__["CourseViewerComponent"] },
    { path: 'quizzes', component: _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_8__["QuizListComponent"] },
    { path: 'quiz/:quizId', component: _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_9__["QuizTakerComponent"] },
    { path: 'quiz/:quizId/submission/:submissionId', component: _detail_submission_view_detail_submission_view_component__WEBPACK_IMPORTED_MODULE_11__["DetailSubmissionViewComponent"] },
    { path: 'quiz/:quizId/submissions', component: _quiz_submission_quiz_submission_component__WEBPACK_IMPORTED_MODULE_10__["QuizSubmissionComponent"] },
    { path: '**', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-enrollment/course-enrollment.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/course-enrollment/course-enrollment.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-enrollment/course-enrollment.component.html":
/*!********************************************************************!*\
  !*** ./src/app/course-enrollment/course-enrollment.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Course Enrollment </h1>\n<hr/>\n<h2>Enrolled Courses </h2>\n<div class=\"row\">\n  <div *ngFor=\"let course of enrolledCourses\" class=\"col-sm-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{course.title}}</h5>\n        <p>Course description, right now contains some garbage value</p>\n        <a routerLink=\"/enroll/course/{{course.id}}/section\"\n           class=\"btn btn-warning\">Un-Enroll</a>\n      </div>\n    </div>\n  </div>\n</div>\n<hr/>\n<h2>Other Courses</h2>\n<div class=\"row\">\n  <div *ngFor=\"let course of otherCourses\" class=\"col-sm-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{course.title}}</h5>\n        <p>Course description, right now contains some garbage value</p>\n        <a routerLink=\"/course/{{course.id}}/section\"\n           class=\"btn btn-warning\">Enroll</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-enrollment/course-enrollment.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/course-enrollment/course-enrollment.component.ts ***!
  \******************************************************************/
/*! exports provided: CourseEnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseEnrollmentComponent", function() { return CourseEnrollmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _model_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user.model.client */ "./src/app/model/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseEnrollmentComponent = /** @class */ (function () {
    function CourseEnrollmentComponent(service, userService, sectionService) {
        this.service = service;
        this.userService = userService;
        this.sectionService = sectionService;
        this.courses = [];
        this.enrolledCourses = [];
        this.otherCourses = [];
        this.user = new _model_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.sections = [];
    }
    CourseEnrollmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
            _this.userService.profile()
                .then(function (user) {
                _this.user = user;
                _this.userService.findUserById(user._id)
                    .then(function (newuser) {
                    _this.user = newuser;
                    console.log('user');
                    console.log(_this.user);
                });
                _this.sectionService
                    .findSectionsForStudent()
                    .then(function (sections) {
                    _this.sections = sections;
                    if (sections.length === 0) {
                        _this.otherCourses = _this.courses;
                    }
                    else {
                        for (var i = 0; i < _this.courses.length; i++) {
                            for (var j = 0; j < _this.sections.length; j++) {
                                console.log(_this.sections[j]);
                                if (_this.sections[j].section.courseId === _this.courses[i].id) {
                                    _this.enrolledCourses.push(_this.courses[i]);
                                }
                                else {
                                    _this.otherCourses.push(_this.courses[i]);
                                    break;
                                }
                            }
                        }
                    }
                });
            });
        });
    };
    CourseEnrollmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-enrollment',
            template: __webpack_require__(/*! ./course-enrollment.component.html */ "./src/app/course-enrollment/course-enrollment.component.html"),
            styles: [__webpack_require__(/*! ./course-enrollment.component.css */ "./src/app/course-enrollment/course-enrollment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceCleint"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"]])
    ], CourseEnrollmentComponent);
    return CourseEnrollmentComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <button (click)=\"home()\"\n          class=\"btn btn-primary btn-success\">\n    Home\n  </button>\n  <div class=\"row\">\n    <div class=\"col-2\">\n      <h2>Courses</h2>\n      <ul class=\"list-group\">\n        <li [ngClass]=\"{'active': course.id == courseId}\" *ngFor=\"let course of courses\"\n            class=\"list-group-item \" (click)=\"loadModules(course.id)\">\n          <!--<a routerLink=\"/course/{{course.id}}\">-->\n            {{course.title}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-2\">\n      <h2>Modules</h2>\n      <ul class =\"list-group\">\n        <li [ngClass]=\"{'active': module.id == moduleId}\" *ngFor=\"let module of modules\"\n            class=\"list-group-item\" (click)=\"loadLessons(courseId,module.id)\">\n          <!--<a routerLink=\"/course/{{courseId}}/module/{{module.id}}\">-->\n            {{module.title}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-2\">\n      <h2>Lessons</h2>\n      <ul class=\"list-group\">\n        <li  *ngFor=\"let lesson of lessons\" [ngClass]=\"{'active': lesson.id == lessonId}\"\n             class=\"list-group-item\" (click)=\"loadTopics(courseId,moduleId,lesson.id)\">\n          <!--<a class=\"list-group-item\" [ngClass]=\"{'active': lesson.id == lessonId}\" routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">-->\n            {{lesson.title}}\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-2\">\n      <h2>Topics</h2>\n      <ul class=\"list-group\">\n        <li  *ngFor=\"let topic of topics\" [ngClass]=\"{'active': topic.id == topicId}\"\n             class=\"list-group-item\" (click)=\"loadWidgets(courseId,moduleId,lessonId,topic.id)\">\n          <!--<a class=\"list-group-item\" [ngClass]=\"{'active': topic.id == topicId}\" routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">-->\n            {{topic.title}}\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-3\">\n      <h2>Widgets</h2>\n    <div class=\"row\" *ngFor=\"let widget of widgets\">\n      <div [ngSwitch]=\"widget.widgetType\">\n        <div *ngSwitchCase=\"'Heading'\">\n          <div [ngSwitch]=\"widget.size\">\n            <h1 *ngSwitchCase=\"'1'\">{{widget.text}}</h1>\n            <h2 *ngSwitchCase=\"'2'\">{{widget.text}}</h2>\n            <h3 *ngSwitchCase=\"'3'\">{{widget.text}}</h3>\n            <h4 *ngSwitchCase=\"'4'\">{{widget.text}}</h4>\n            <h5 *ngSwitchCase=\"'5'\">{{widget.text}}</h5>\n            <h6 *ngSwitchCase=\"'6'\">{{widget.text}}</h6>\n          </div>\n        </div>\n        <div *ngSwitchCase=\"'Link'\">\n          <a href=\"{{widget.linkHref}}\">{{widget.text}}</a>\n        </div>\n        <div *ngSwitchCase=\"'List'\">\n          <h1>ListWidget</h1>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\"\n                *ngFor=\"let item of widget.text.split('\\n')\">\n              {{item}}\n            </li>\n          </ul>\n        </div>\n        <div *ngSwitchCase=\"'Paragraph'\">\n          <h1>Paragraph Widget</h1>\n          <p>{{widget.text}}</p>\n        </div>\n        <div *ngSwitchCase=\"'Image'\">\n          <h1>Image Widget</h1>\n          <img className=\"rounded card-img\" src={widget.imageSrc} alt={widget.widgetName} />\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_course_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/course.model.client */ "./src/app/model/course.model.client.ts");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, route, normalrouter) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.normalrouter = normalrouter;
        this.lessons = [];
        this.topics = [];
        this.courses = [];
        this.modules = [];
        this.widgets = [];
        this.course = new _model_course_model_client__WEBPACK_IMPORTED_MODULE_2__["Course"]();
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    CourseViewerComponent.prototype.setParams = function (params) {
        // this.courseId = params['courseId'];
        // this.moduleId = params['moduleId'];
        // this.lessonId = params['lessonId'];
        // this.topicId = params['topicId'];
        // this.loadCourses();
        // this.loadModules(this.courseId);
        // this.loadLessons(this.courseId, this.moduleId);
        // this.loadTopics(this.courseId, this.moduleId, this.lessonId);
    };
    CourseViewerComponent.prototype.loadCourses = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseViewerComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findAllModulesForCourses(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    CourseViewerComponent.prototype.loadLessons = function (courseId, moduleId) {
        var _this = this;
        this.courseId = courseId;
        this.moduleId = moduleId;
        console.log(moduleId);
        this.service.findAllLessonsForModule(courseId, moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    CourseViewerComponent.prototype.loadTopics = function (courseId, moduleId, lessonId) {
        var _this = this;
        this.courseId = courseId;
        this.moduleId = moduleId;
        this.lessonId = lessonId;
        console.log(moduleId);
        this.service.findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then(function (topics) { return _this.topics = topics; });
    };
    CourseViewerComponent.prototype.loadWidgets = function (courseId, moduleId, lessonId, topicId) {
        var _this = this;
        this.topicId = topicId;
        console.log('test topic id:' + topicId);
        this.service.findAllWidgets(courseId, moduleId, lessonId, topicId)
            .then(function (widgets) {
            _this.widgets = widgets;
            console.log(widgets);
        });
    };
    CourseViewerComponent.prototype.home = function () {
        this.normalrouter.navigate(['home']);
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
        this.loadCourses();
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_3__["CourseNavigatorServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/detail-submission-view/detail-submission-view.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/detail-submission-view/detail-submission-view.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/detail-submission-view/detail-submission-view.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/detail-submission-view/detail-submission-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <button class=\"btn btn-primary \" routerLink=\"/home\">Home </button>\n\n  <h2>Submission for the Quiz</h2>\n<p><strong>Student Username: </strong> {{user.username}}</p>\n<p><strong>Submission Time: </strong> {{submission.submissionTime}}</p>\n<p><strong>Quiz Title: </strong> {{quiz.title}}</p>\n\n<ul class=\"list-group\">\n  <li *ngFor=\"let answer of submission.answers\" class=\"list-group-item\">\n    <div *ngFor=\"let question of quiz.questions\"> <p *ngIf=\"answer._id == question._id\"><strong>Question: </strong> {{question.title}}</p> </div>\n    <p *ngIf=\"answer.essayAnswer != null\"> <strong>Essay Answer: </strong>  {{answer.essayAnswer}} </p>\n    <div *ngFor=\"let question of quiz.questions\"> <p *ngIf=\"answer.multipleChoiceAnswer != null && answer._id == question._id\"> <strong>Multiple Choice Answer: </strong> {{question.choices[answer.multipleChoiceAnswer].text}} </p></div>\n    <p *ngIf=\"answer.trueFalseAnswer != null\"> <strong>True False Answer: </strong> {{answer.trueFalseAnswer}} </p>\n    <p *ngIf=\"answer.fillBlanksAnswers != null\"> <strong>Fill Blanks Answer Value 1</strong> is: {{answer.fillBlanksAnswers.val1}}\n      <br/>\n      <strong>Fill Blanks Answer Value 2</strong> is: {{answer.fillBlanksAnswers.val2}}\n    </p>\n\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/detail-submission-view/detail-submission-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/detail-submission-view/detail-submission-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetailSubmissionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailSubmissionViewComponent", function() { return DetailSubmissionViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailSubmissionViewComponent = /** @class */ (function () {
    function DetailSubmissionViewComponent(service, userService, aRoute) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.aRoute = aRoute;
        aRoute.params.subscribe(function (params) { return _this.setParams(params); });
    }
    DetailSubmissionViewComponent.prototype.setParams = function (params) {
        this.quizId = params['quizId'];
        this.submissionId = params['submissionId'];
        this.loadDetailSubmission(this.quizId, this.submissionId);
        this.loadQuiz(this.quizId);
    };
    DetailSubmissionViewComponent.prototype.loadQuiz = function (quizId) {
        var _this = this;
        this.service.findQuizById(quizId).then(function (quiz) { return _this.quiz = quiz; });
    };
    DetailSubmissionViewComponent.prototype.loadDetailSubmission = function (quizId, submissionId) {
        var _this = this;
        this.service.loadDetailSubmission(quizId, submissionId).then(function (submission) {
            _this.submission = submission[0];
            _this.userService.findUserById(_this.submission.student).then(function (user) { return _this.user = user; });
            console.log(_this.submission);
        });
    };
    DetailSubmissionViewComponent.prototype.ngOnInit = function () {
    };
    DetailSubmissionViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-submission-view',
            template: __webpack_require__(/*! ./detail-submission-view.component.html */ "./src/app/detail-submission-view/detail-submission-view.component.html"),
            styles: [__webpack_require__(/*! ./detail-submission-view.component.css */ "./src/app/detail-submission-view/detail-submission-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__["QuizServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceCleint"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailSubmissionViewComponent);
    return DetailSubmissionViewComponent;
}());



/***/ }),

/***/ "./src/app/essay-question/essay-question.component.css":
/*!*************************************************************!*\
  !*** ./src/app/essay-question/essay-question.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/essay-question/essay-question.component.html":
/*!**************************************************************!*\
  !*** ./src/app/essay-question/essay-question.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea [(ngModel)]=\"question.essayAnswer\" class=\"form-control\"></textarea>\n\n"

/***/ }),

/***/ "./src/app/essay-question/essay-question.component.ts":
/*!************************************************************!*\
  !*** ./src/app/essay-question/essay-question.component.ts ***!
  \************************************************************/
/*! exports provided: EssayQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssayQuestionComponent", function() { return EssayQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EssayQuestionComponent = /** @class */ (function () {
    function EssayQuestionComponent() {
    }
    EssayQuestionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EssayQuestionComponent.prototype, "question", void 0);
    EssayQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-essay-question',
            template: __webpack_require__(/*! ./essay-question.component.html */ "./src/app/essay-question/essay-question.component.html"),
            styles: [__webpack_require__(/*! ./essay-question.component.css */ "./src/app/essay-question/essay-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EssayQuestionComponent);
    return EssayQuestionComponent;
}());



/***/ }),

/***/ "./src/app/fill-blanks-question/fill-blanks-question.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/fill-blanks-question/fill-blanks-question.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fill-blanks-question/fill-blanks-question.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/fill-blanks-question/fill-blanks-question.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <span [ngSwitch]=\"blank.indexOf('*')\" *ngFor=\"let blank of question.blanks\">\n  <span *ngSwitchCase=\"-1\">{{blank}}</span>\n  <span *ngSwitchCase=\"0\">\n    <input [(ngModel)]=\"question.fillBlanksAnswers[blank.split('=')[0].replace('*','')]\"\n           placeholder=\"{{blank.split('=')[0].replace('*','')}}\"\n           style=\"border-color:black\">\n  </span>\n</span>\n"

/***/ }),

/***/ "./src/app/fill-blanks-question/fill-blanks-question.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/fill-blanks-question/fill-blanks-question.component.ts ***!
  \************************************************************************/
/*! exports provided: FillBlanksQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillBlanksQuestionComponent", function() { return FillBlanksQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FillBlanksQuestionComponent = /** @class */ (function () {
    function FillBlanksQuestionComponent() {
    }
    FillBlanksQuestionComponent.prototype.ngOnInit = function () {
        this.question.fillBlanksAnswers = {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FillBlanksQuestionComponent.prototype, "question", void 0);
    FillBlanksQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fill-blanks-question',
            template: __webpack_require__(/*! ./fill-blanks-question.component.html */ "./src/app/fill-blanks-question/fill-blanks-question.component.html"),
            styles: [__webpack_require__(/*! ./fill-blanks-question.component.css */ "./src/app/fill-blanks-question/fill-blanks-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FillBlanksQuestionComponent);
    return FillBlanksQuestionComponent;
}());



/***/ }),

/***/ "./src/app/login-user/login-user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-user/login-user.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-user/login-user.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-user/login-user.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <br/>\n  <button (click)=\"login(username, password)\"\n          class=\"btn btn-primary btn-block\">\n    Login\n  </button>\n  <br/>\n\n  <div>\n    <button (click)=\"home()\"\n            class=\"btn btn-primary btn-success\">\n      Home\n    </button>\n    <button (click)=\"register()\"\n            class=\"btn btn-primary btn-primary\">\n      Register\n    </button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login-user/login-user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-user/login-user.component.ts ***!
  \****************************************************/
/*! exports provided: LoginUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserComponent", function() { return LoginUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _model_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user.model.client */ "./src/app/model/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginUserComponent = /** @class */ (function () {
    function LoginUserComponent(router, service) {
        this.router = router;
        this.service = service;
        this.user = new _model_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    LoginUserComponent.prototype.ngOnInit = function () {
    };
    LoginUserComponent.prototype.home = function () {
        this.router.navigate(['home']);
    };
    LoginUserComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    LoginUserComponent.prototype.login = function (username, password) {
        var _this = this;
        this.service.login(username, password)
            .then(function (user) {
            console.log('login');
            console.log(user);
            _this.user = user;
            if (user == null) {
                alert('Invalid Credentials, Try again!');
            }
            else {
                _this.router.navigate(['profile']);
            }
        });
    };
    LoginUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-user',
            template: __webpack_require__(/*! ./login-user.component.html */ "./src/app/login-user/login-user.component.html"),
            styles: [__webpack_require__(/*! ./login-user.component.css */ "./src/app/login-user/login-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceCleint"]])
    ], LoginUserComponent);
    return LoginUserComponent;
}());



/***/ }),

/***/ "./src/app/model/course.model.client.ts":
/*!**********************************************!*\
  !*** ./src/app/model/course.model.client.ts ***!
  \**********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/model/user.model.client.ts":
/*!********************************************!*\
  !*** ./src/app/model/user.model.client.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/multiple-choice-question/multiple-choice-question.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/multiple-choice-question/multiple-choice-question.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/multiple-choice-question/multiple-choice-question.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/multiple-choice-question/multiple-choice-question.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li *ngFor=\"let choice of question.choices\"\n      class=\"list-group-item\">\n    <label>\n      <input (click)=\"selected(choice)\" name=\"{{question._id}}\"\n             type=\"radio\">\n      {{choice.text}}\n    </label>\n  </li>\n"

/***/ }),

/***/ "./src/app/multiple-choice-question/multiple-choice-question.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/multiple-choice-question/multiple-choice-question.component.ts ***!
  \********************************************************************************/
/*! exports provided: MultipleChoiceQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleChoiceQuestionComponent", function() { return MultipleChoiceQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultipleChoiceQuestionComponent = /** @class */ (function () {
    function MultipleChoiceQuestionComponent() {
        var _this = this;
        this.selected = function (choice) {
            _this.question.multipleChoiceAnswer = _this.question.choices.indexOf(choice);
        };
    }
    MultipleChoiceQuestionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleChoiceQuestionComponent.prototype, "question", void 0);
    MultipleChoiceQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-choice-question',
            template: __webpack_require__(/*! ./multiple-choice-question.component.html */ "./src/app/multiple-choice-question/multiple-choice-question.component.html"),
            styles: [__webpack_require__(/*! ./multiple-choice-question.component.css */ "./src/app/multiple-choice-question/multiple-choice-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultipleChoiceQuestionComponent);
    return MultipleChoiceQuestionComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div>\n    <button (click)=\"logout()\"\n            class=\"btn btn-primary btn-danger\">\n      Logout\n    </button>\n    <button (click)=\"home()\"\n            class=\"btn btn-primary btn-success\">\n      Home\n    </button>\n    <button *ngIf=\"user.admin\" (click)=\"admin()\"\n            class=\"btn btn-primary btn-dark\">\n      Admin\n    </button>\n  </div>\n\n  <h1>Profile</h1>\n  <input [(ngModel)]=\"user.username\"\n         placeholder=\"User Name\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.password\"\n         placeholder=\"Password\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.firstName\"\n         placeholder=\"first name\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.lastName\"\n         placeholder=\"lastName\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.email\"\n         placeholder=\"email\"\n         class=\"form-control\"/>\n  <button (click)=\"update(user)\"\n          class=\"btn btn-primary btn-block btn-success\">\n    Update\n  </button>\n  <button (click)=\"courseNavigator()\"\n          class=\"btn btn-primary btn-block\">\n    Go to Course Navigator\n  </button>\n\n\n  <h2>Sections {{sections.length}}</h2>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let enrollment of sections\" class=\"list-group-item\">\n      {{enrollment.section.name}}\n      ({{enrollment.section.seats}})\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user.model.client */ "./src/app/model/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, sectionService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.router = router;
        this.user = new _model_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.sections = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile()
            .then(function (user) {
            _this.user = user;
            console.log(user._id);
            _this.service.findUserById(user._id)
                .then(function (newuser) {
                _this.user = newuser;
                console.log('user');
                console.log(_this.user);
            });
        });
        this.sectionService
            .findSectionsForStudent()
            .then(function (sections) {
            _this.sections = sections;
            console.log(sections[0].section);
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () { return _this.router.navigate(['login']); });
    };
    ProfileComponent.prototype.home = function () {
        this.router.navigate(['home']);
    };
    ProfileComponent.prototype.admin = function () {
        this.router.navigate(['admin']);
    };
    ProfileComponent.prototype.courseNavigator = function () {
        this.router.navigate(['course']);
    };
    ProfileComponent.prototype.update = function (user) {
        console.log(user);
        this.service.updateProfile(user.username, user.password, user.firstName, user.lastName, user.email)
            .then(function () { return console.log('update'); });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceCleint"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Quizzes</h2>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let quiz of quizzes\" class=\"list-group-item\">\n      {{quiz.title}}\n\n      <a *ngIf=\"user.admin\" routerLink=\"/quiz/{{quiz._id}}/submissions\" class=\"btn btn-info float-right\">Submissions</a>\n      <a *ngIf=\"!user.admin\" routerLink=\"/quiz/{{quiz._id}}\" class=\"btn btn-success float-right\">Take</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.ts ***!
  \**************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizListComponent = /** @class */ (function () {
    function QuizListComponent(service, userService) {
        this.service = service;
        this.userService = userService;
        this.quizzes = [];
    }
    QuizListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile().then(function (user) {
            _this.userService.findUserById(user._id).then(function (newUser) { return _this.user = newUser; });
            console.log(_this.user);
        });
        this.service.findAllQuizzes()
            .then(function (quizzes) { return _this.quizzes = quizzes; });
    };
    QuizListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-list',
            template: __webpack_require__(/*! ./quiz-list.component.html */ "./src/app/quiz-list/quiz-list.component.html"),
            styles: [__webpack_require__(/*! ./quiz-list.component.css */ "./src/app/quiz-list/quiz-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__["QuizServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceCleint"]])
    ], QuizListComponent);
    return QuizListComponent;
}());



/***/ }),

/***/ "./src/app/quiz-submission/quiz-submission.component.css":
/*!***************************************************************!*\
  !*** ./src/app/quiz-submission/quiz-submission.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-submission/quiz-submission.component.html":
/*!****************************************************************!*\
  !*** ./src/app/quiz-submission/quiz-submission.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Submissions</h2>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let superSubmission of superSubmissions\" class=\"list-group-item\">\n     <div class=\"row\">\n       <div class=\"col\"><p><strong> Submission for Student: </strong> {{superSubmission.user.username}}</p>\n         <p><strong>Submission Time:</strong> {{superSubmission.submission.submissionTime}}</p>\n       </div>\n      <a routerLink=\"/quiz/{{superSubmission.submission.quiz}}/submission/{{superSubmission.submission._id}}\" class=\"btn btn-success float-right\">View Submission</a>\n     </div> </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-submission/quiz-submission.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/quiz-submission/quiz-submission.component.ts ***!
  \**************************************************************/
/*! exports provided: QuizSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSubmissionComponent", function() { return QuizSubmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizSubmissionComponent = /** @class */ (function () {
    function QuizSubmissionComponent(service, userService, aRoute) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.aRoute = aRoute;
        this.quizId = '';
        this.submissions = [];
        this.superSubmissions = [];
        this.aRoute.params.subscribe(function (params) {
            return _this.loadSubmissions(params['quizId']);
        });
    }
    QuizSubmissionComponent.prototype.loadSubmissions = function (quizId) {
        var _this = this;
        this.quizId = quizId;
        this.service.loadSubmissions(this.quizId)
            .then(function (submissions) {
            _this.submissions = submissions;
            _this.loadSuperSubmission();
        });
    };
    QuizSubmissionComponent.prototype.loadSuperSubmission = function () {
        var _this = this;
        this.submissions.forEach(function (submission, index) {
            _this.userService.findUserById(submission.student).then(function (user) {
                var superSubmission = {
                    user: '',
                    submission: ''
                };
                superSubmission.user = user;
                superSubmission.submission = submission;
                _this.superSubmissions.push(superSubmission);
            });
        });
    };
    QuizSubmissionComponent.prototype.ngOnInit = function () {
    };
    QuizSubmissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-submission',
            template: __webpack_require__(/*! ./quiz-submission.component.html */ "./src/app/quiz-submission/quiz-submission.component.html"),
            styles: [__webpack_require__(/*! ./quiz-submission.component.css */ "./src/app/quiz-submission/quiz-submission.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__["QuizServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceCleint"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], QuizSubmissionComponent);
    return QuizSubmissionComponent;
}());



/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.html":
/*!******************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Quiz Taker</h2>\n\n<h3>\n  {{quiz.title}}\n  <button class=\"btn btn-primary float-right\"\n          (click)=\"submitQuiz(quiz)\">\n    Submit\n  </button>\n</h3>\n\n<ul class=\"list-group\">\n  <li *ngFor=\"let question of quiz.questions\" class=\"list-group-item\">\n    <h4>\n      {{question.title}}\n      <span class=\"float-right\">{{question.points}}</span>\n    </h4>\n    <p>{{question.description}}</p>\n    <div [ngSwitch]=\"question.questionType\">\n\n      <app-true-false-question\n        [question]=\"question\"\n        *ngSwitchCase=\"'TRUE_FALSE'\">\n      </app-true-false-question>\n\n      <app-fill-blanks-question\n        [question]=\"question\"\n        *ngSwitchCase=\"'FILL_BLANKS'\">\n      </app-fill-blanks-question>\n\n      <app-multiple-choice-question\n        [question]=\"question\"\n        *ngSwitchCase=\"'CHOICE'\">\n      </app-multiple-choice-question>\n\n      <app-essay-question\n        [question]=\"question\"\n        *ngSwitchCase=\"'ESSAY'\">\n      </app-essay-question>\n\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.ts ***!
  \****************************************************/
/*! exports provided: QuizTakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizTakerComponent", function() { return QuizTakerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizTakerComponent = /** @class */ (function () {
    function QuizTakerComponent(service, router, userService, activatedRoute) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.quizId = '';
        this.submission = {
            answers: []
        };
        this.submitQuiz = function (quiz) {
            _this.quiz.submissionTime = new Date();
            _this.service
                .submitQuiz(quiz)
                .then(function (submission) {
                console.log(submission);
                _this.router.navigate(['/quiz/' + _this.quiz._id + '/submission/' + submission._id]);
            });
        };
    }
    QuizTakerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) { return _this.service
            .findQuizById(params['quizId'])
            .then(function (quiz) { return _this.quiz = quiz; }); });
    };
    QuizTakerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-taker',
            template: __webpack_require__(/*! ./quiz-taker.component.html */ "./src/app/quiz-taker/quiz-taker.component.html"),
            styles: [__webpack_require__(/*! ./quiz-taker.component.css */ "./src/app/quiz-taker/quiz-taker.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__["QuizServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceCleint"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], QuizTakerComponent);
    return QuizTakerComponent;
}());



/***/ }),

/***/ "./src/app/register-user/register-user.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-user/register-user.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-user/register-user.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-user/register-user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password2\"\n         placeholder=\"verify password\"\n         class=\"form-control\"/>\n  <button (click)=\"register(username, password, password2)\"\n          class=\"btn btn-primary btn-block\">\n    Register\n  </button>\n\n  <a routerLink=\"/home\">Home</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register-user/register-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-user/register-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(router, service) {
        this.router = router;
        this.service = service;
        this.isAdmin = false;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    RegisterUserComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (password !== password2) {
            alert('Passwords do not match');
        }
        else {
            if (username === 'admin' && password === 'admin') {
                this.isAdmin = true;
            }
            this.service.createUser(username, password, this.isAdmin)
                .then(function () { return _this.router.navigate(['profile']); });
        }
    };
    RegisterUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-user',
            template: __webpack_require__(/*! ./register-user.component.html */ "./src/app/register-user/register-user.component.html"),
            styles: [__webpack_require__(/*! ./register-user.component.css */ "./src/app/register-user/register-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceCleint"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/section/section.component.css":
/*!***********************************************!*\
  !*** ./src/app/section/section.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section/section.component.html":
/*!************************************************!*\
  !*** ./src/app/section/section.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Sections for course: {{currentCourse.title}}</h1>\n  <div *ngIf=\"isAdmin\">\n    <input [(ngModel)]=\"sectionName\"\n           placeholder=\"Section Name\"\n           class=\"form-control\"/>\n    <input [(ngModel)]=\"seats\"\n           placeholder=\"Seats\"\n           class=\"form-control\"/>\n    <button (click)=\"createSection(sectionName, seats)\" class=\"btn btn-success btn-block\">\n      Add Section\n    </button>\n    <button (click)=\"editSection(sectionName, seats)\" class=\"btn btn-primary btn-block\">\n      Edit and Update Section\n    </button>\n  </div>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n      {{section.name}} {{section.seats}}\n      <button *ngIf=\"isAdmin\" (click)=\"populateField(section._id, section.name,section.seats)\" class=\"float-right btn btn-warning\">Edit</button>\n      <button *ngIf=\"isAdmin\" (click)=\"deleteSection(section)\" class=\"float-right btn btn-danger\">Delete</button>\n      <button *ngIf=\"!isAdmin\" (click)=\"unenroll(section)\" class=\"float-right btn btn-info\">UnEnroll</button>\n      <button *ngIf=\"!isAdmin\" (click)=\"enroll(section)\" class=\"float-right btn btn-primary\">Enroll</button>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/section/section.component.ts":
/*!**********************************************!*\
  !*** ./src/app/section/section.component.ts ***!
  \**********************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SectionComponent = /** @class */ (function () {
    function SectionComponent(route, sectionService, router, courseService, userService) {
        var _this = this;
        this.route = route;
        this.sectionService = sectionService;
        this.router = router;
        this.courseService = courseService;
        this.userService = userService;
        this.courseId = '';
        this.sectionName = '';
        this.seats = '';
        this.sections = [];
        this.isAdmin = true;
        this.noUser = false;
        this.route.params.subscribe(function (params) { return _this.loadSections(params['courseId']); });
        this.route.params.subscribe(function (params) {
            _this.courseId = params['courseId'];
            _this.courseService.findCourseById(_this.courseId)
                .then(function (course) {
                _this.currentCourse = course;
                _this.sectionName = course.title + ' Section 1';
            });
        });
        this.userService.profile()
            .then(function (user) {
            console.log(user._id);
            if (user.id == null) {
                _this.noUser = true;
            }
            _this.userService.findUserById(user._id)
                .then(function (newuser) {
                _this.isAdmin = newuser.admin;
            });
        });
    }
    SectionComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.sectionService.findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    SectionComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        this.sectionService.createSection(this.courseId, sectionName, seats)
            .then(function () {
            _this.loadSections(_this.courseId);
        });
    };
    SectionComponent.prototype.populateField = function (id, name, seats) {
        this.sectionName = name;
        this.seats = seats;
        this.selectedSection = id;
    };
    SectionComponent.prototype.enroll = function (section) {
        var _this = this;
        this.sectionService.enrollStudentInSection(section._id)
            .then(function () {
            _this.router.navigate(['profile']);
        });
    };
    SectionComponent.prototype.unenroll = function (section) {
        var _this = this;
        this.sectionService.unenrollStudentInSection(section._id)
            .then(function () {
            _this.router.navigate(['profile']);
        });
    };
    SectionComponent.prototype.deleteSection = function (section) {
        var _this = this;
        this.sectionService.deleteSection(section._id)
            .then(function () {
            _this.loadSections(_this.courseId);
        });
    };
    SectionComponent.prototype.editSection = function (sectionName, seats) {
        var _this = this;
        this.sectionService.editSection(this.selectedSection, sectionName, seats)
            .then(function () {
            _this.loadSections(_this.courseId);
        });
    };
    SectionComponent.prototype.ngOnInit = function () {
    };
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.css */ "./src/app/section/section.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceCleint"]])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/services/course-navigator.service.client.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/course-navigator.service.client.ts ***!
  \*************************************************************/
/*! exports provided: CourseNavigatorServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorServiceClient", function() { return CourseNavigatorServiceClient; });
var CourseNavigatorServiceClient = /** @class */ (function () {
    function CourseNavigatorServiceClient() {
    }
    CourseNavigatorServiceClient.prototype.findAllCourses = function () {
        return fetch('https://arcane-river-53780.herokuapp.com/api/course')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllModulesForCourses = function (courseId) {
        return fetch('https://arcane-river-53780.herokuapp.com/api/course/' + courseId + '/module')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllLessonsForModule = function (courseId, moduleId) {
        return fetch('https://arcane-river-53780.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllTopicsForLesson = function (courseId, moduleId, lessonId) {
        return fetch('https://arcane-river-53780.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllWidgets = function (courseId, moduleId, lessonId, topicId) {
        return fetch('https://arcane-river-53780.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic/' + topicId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return CourseNavigatorServiceClient;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_URL = 'https://arcane-river-53780.herokuapp.com/api/course';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/quiz.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/quiz.service.client.ts ***!
  \*************************************************/
/*! exports provided: QuizServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizServiceClient", function() { return QuizServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuizServiceClient = /** @class */ (function () {
    function QuizServiceClient() {
        this.submitQuiz = function (quiz) {
            return fetch('https://young-garden-67805.herokuapp.com/api/quiz/' + quiz._id + '/submission', {
                method: 'post',
                body: JSON.stringify(quiz),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(function (response) { return response.json(); });
        };
        this.findAllQuizzes = function () {
            return fetch('https://young-garden-67805.herokuapp.com/api/quiz')
                .then(function (response) { return response.json(); });
        };
        this.findQuizById = function (quizId) {
            return fetch('https://young-garden-67805.herokuapp.com/api/quiz/' + quizId)
                .then(function (response) { return response.json(); });
        };
    }
    QuizServiceClient.prototype.createQuiz = function (quiz) {
    };
    QuizServiceClient.prototype.loadDetailSubmission = function (quizId, submissionId) {
        return fetch('https://young-garden-67805.herokuapp.com/api/quiz/' + quizId + '/submission/' + submissionId, {
            method: 'get',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            }
        }).then(function (response) { return response.json(); });
    };
    QuizServiceClient.prototype.loadSubmissions = function (quizId) {
        return fetch('https://young-garden-67805.herokuapp.com/api/quiz/' + quizId + '/submissions')
            .then(function (response) { return response.json(); });
    };
    QuizServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], QuizServiceClient);
    return QuizServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.SECTION_URL = 'https://young-garden-67805.herokuapp.com/api/course/COURSEID/section';
    }
    SectionServiceClient.prototype.findSectionsForStudent = function () {
        var url = 'https://young-garden-67805.herokuapp.com/api/student/section';
        return fetch(url, {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.enrollStudentInSection = function (sectionId) {
        var url = 'https://young-garden-67805.herokuapp.com/api/section/' + sectionId + '/enrollment';
        return fetch(url, {
            method: 'POST',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.unenrollStudentInSection = function (sectionId) {
        var url = 'https://young-garden-67805.herokuapp.com/api/section/' + sectionId + '/unenrollment';
        return fetch(url, {
            method: 'POST',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.deleteSection = function (sectionId) {
        var url = 'https://young-garden-67805.herokuapp.com/api/section/' + sectionId;
        return fetch(url, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.editSection = function (sectionId, name, seats) {
        var url = 'https://young-garden-67805.herokuapp.com/api/section/' + sectionId;
        var section = { name: name, seats: seats };
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.createSection = function (courseId, name, seats) {
        var section = { courseId: courseId, name: name, seats: seats };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'POST',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceCleint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceCleint", function() { return UserServiceCleint; });
var UserServiceCleint = /** @class */ (function () {
    function UserServiceCleint() {
    }
    UserServiceCleint.prototype.findUserById = function (userId) {
        return fetch('https://young-garden-67805.herokuapp.com/api/user/' + userId, {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceCleint.prototype.profile = function () {
        return fetch('https://young-garden-67805.herokuapp.com/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceCleint.prototype.createUser = function (username, password, admin) {
        var user = {
            username: username,
            password: password,
            admin: admin
        };
        return fetch('https://young-garden-67805.herokuapp.com/api/user', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceCleint.prototype.logout = function () {
        return fetch('https://young-garden-67805.herokuapp.com/api/logout', {
            method: 'POST',
            credentials: 'include',
        });
    };
    UserServiceCleint.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('https://young-garden-67805.herokuapp.com/api/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceCleint.prototype.updateProfile = function (username, password, firstname, lastname, email) {
        var user = {
            username: username,
            password: password,
            firstName: firstname,
            lastName: lastname,
            email: email
        };
        return fetch('https://young-garden-67805.herokuapp.com/api/profile', {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceCleint;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
    }
    WidgetServiceClient.prototype.findAllWidgetsForLesson = function (topicId) {
        return fetch('https://arcane-river-53780.herokuapp.com/api/topic/' + 1 + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/true-false-question/true-false-question.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/true-false-question/true-false-question.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/true-false-question/true-false-question.component.html":
/*!************************************************************************!*\
  !*** ./src/app/true-false-question/true-false-question.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\n  <input (click)=\"selected(true)\"\n         name=\"{{question._id}}\"\n         type=\"radio\">\n  True\n</label>\n<br/>\n<label>\n  <input (click)=\"selected(false)\"\n         name=\"{{question._id}}\"\n         type=\"radio\">\n  False\n</label>\n"

/***/ }),

/***/ "./src/app/true-false-question/true-false-question.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/true-false-question/true-false-question.component.ts ***!
  \**********************************************************************/
/*! exports provided: TrueFalseQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrueFalseQuestionComponent", function() { return TrueFalseQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrueFalseQuestionComponent = /** @class */ (function () {
    function TrueFalseQuestionComponent() {
        var _this = this;
        this.selected = function (trueOrFalse) {
            _this.question.trueFalseAnswer = trueOrFalse;
        };
    }
    TrueFalseQuestionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrueFalseQuestionComponent.prototype, "question", void 0);
    TrueFalseQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-true-false-question',
            template: __webpack_require__(/*! ./true-false-question.component.html */ "./src/app/true-false-question/true-false-question.component.html"),
            styles: [__webpack_require__(/*! ./true-false-question.component.css */ "./src/app/true-false-question/true-false-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrueFalseQuestionComponent);
    return TrueFalseQuestionComponent;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group row\">\n  <h1>\n    White Board\n  </h1>\n  </div>\n  <div class=\"form-group row\">\n    <button (click)=\"login()\"\n            class=\"btn btn-primary btn-block\">\n      Login\n    </button>\n  </div>\n\n  <div class=\"form-group row\">\n    <button (click)=\"register()\"\n            class=\"btn btn-primary btn-block\">\n      Register\n    </button>\n  </div>\n\n  <div *ngIf=\"isLoggedIn\" class=\"form-group row\">\n    <button (click)=\"quiz()\"\n            class=\"btn btn-success btn-block\">\n      Quizzes\n    </button>\n  </div>\n  <app-course-enrollment ></app-course-enrollment>\n</div>\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoggedIn = false;
    }
    WhiteBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile().then(function (response) {
            if (response != null) {
                if (response.username !== 'unregistered')
                    _this.isLoggedIn = true;
            }
        });
    };
    WhiteBoardComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    WhiteBoardComponent.prototype.login = function () {
        this.router.navigate(['login']);
    };
    WhiteBoardComponent.prototype.quiz = function () {
        this.router.navigate(['quizzes']);
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceCleint"]])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vaibhavshukla/Documents/Summer2018/CS5610/project/angular-client/course-manager-angular-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map