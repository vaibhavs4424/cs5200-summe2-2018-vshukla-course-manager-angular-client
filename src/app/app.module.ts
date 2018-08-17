import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routing} from './app.routing';
import {AppComponent} from './app.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseNavigatorServiceClient} from './services/course-navigator.service.client';
import {CourseServiceClient} from './services/course.service.client';
import {WidgetServiceClient} from './services/widget.service.client';
import {UserServiceCleint} from './services/user.service.client';
import {SectionServiceClient} from './services/section.service.client';
import {FormsModule} from '@angular/forms';
import {RegisterUserComponent} from './register-user/register-user.component';
import {AdminComponent} from './admin/admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionComponent } from './section/section.component';
import { CourseEnrollmentComponent } from './course-enrollment/course-enrollment.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuizSubmissionComponent } from './quiz-submission/quiz-submission.component';
import { DetailSubmissionViewComponent } from './detail-submission-view/detail-submission-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    RegisterUserComponent,
    AdminComponent,
    LoginUserComponent,
    ProfileComponent,
    SectionComponent,
    CourseEnrollmentComponent,
    CourseViewerComponent,
    QuizListComponent,
    QuizTakerComponent,
    EssayQuestionComponent,
    FillBlanksQuestionComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent,
    QuizSubmissionComponent,
    DetailSubmissionViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    WidgetServiceClient,
    UserServiceCleint,
    QuizServiceClient,
    SectionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
