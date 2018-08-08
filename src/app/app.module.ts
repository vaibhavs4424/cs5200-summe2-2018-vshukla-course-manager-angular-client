import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseNavigatorServiceClient } from './services/course-navigator.service.client';
import { CourseServiceClient } from './services/course.service.client';
import { WidgetServiceClient } from './services/widget.service.client';
import { UserServiceCleint } from './services/user.service.client';
import { SectionServiceClient } from './services/section.service.client';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    WidgetServiceClient,
    UserServiceCleint,
    SectionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
