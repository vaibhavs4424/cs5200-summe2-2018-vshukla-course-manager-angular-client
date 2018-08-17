import {Routes, RouterModule} from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {AdminComponent} from './admin/admin.component';
import {LoginUserComponent} from './login-user/login-user.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionComponent} from './section/section.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {QuizSubmissionComponent} from './quiz-submission/quiz-submission.component';
import {DetailSubmissionViewComponent} from './detail-submission-view/detail-submission-view.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginUserComponent},
  {path: 'course/:courseId/section', component: AdminComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'profile', component: ProfileComponent},
  { path: 'enroll/course/:courseId/section', component: SectionComponent },
  { path: 'course', component: CourseViewerComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/:quizId', component: QuizTakerComponent },
  { path: 'quiz/:quizId/submission/:submissionId', component: DetailSubmissionViewComponent},
  { path: 'quiz/:quizId/submissions', component: QuizSubmissionComponent},
  {path: '**', component: WhiteBoardComponent}
];
export const Routing = RouterModule.forRoot(appRoutes);
