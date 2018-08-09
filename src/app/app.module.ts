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
    SectionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
