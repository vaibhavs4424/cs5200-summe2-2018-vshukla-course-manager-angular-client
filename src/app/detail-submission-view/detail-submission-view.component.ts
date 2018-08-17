import {Component, OnInit} from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';
import {UserServiceCleint} from '../services/user.service.client';

@Component({
  selector: 'app-detail-submission-view',
  templateUrl: './detail-submission-view.component.html',
  styleUrls: ['./detail-submission-view.component.css']
})
export class DetailSubmissionViewComponent implements OnInit {

  quizId;
  submissionId;
  quiz ;
  submission;
  user;
  userId;

  constructor(
    private service: QuizServiceClient,
    private userService: UserServiceCleint,
    private aRoute: ActivatedRoute) {
    aRoute.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.quizId = params['quizId'];
    this.submissionId = params['submissionId'];
    this.loadDetailSubmission(this.quizId, this.submissionId);
    this.loadQuiz(this.quizId);
  }

  loadQuiz(quizId) {
    this.service.findQuizById(quizId).then(quiz => this.quiz = quiz);
  }

  loadDetailSubmission(quizId, submissionId) {

    this.service.loadDetailSubmission(quizId, submissionId).then((submission) => {
        this.submission = submission[0];
        this.userService.findUserById(this.submission.student).then(user => this.user = user)
        console.log(this.submission);
      }
    );
  }


  ngOnInit() {
  }

}
