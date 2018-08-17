import {Component, OnInit} from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';
import {UserServiceCleint} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-submission',
  templateUrl: './quiz-submission.component.html',
  styleUrls: ['./quiz-submission.component.css']
})
export class QuizSubmissionComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private userService: UserServiceCleint,
              private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe(params =>
      this.loadSubmissions(params['quizId']));
  }

  quizId = '';
  submissions = [];
  superSubmissions =[];


  loadSubmissions(quizId) {
    this.quizId = quizId;
    this.service.loadSubmissions(this.quizId)
      .then(submissions => {
        this.submissions = submissions;
        this.loadSuperSubmission();
      });

  }

  loadSuperSubmission() {
    this.submissions.forEach((submission, index) => {
      this.userService.findUserById(submission.student).then(user => {
        const  superSubmission = {
          user: '',
          submission: ''
        };
        superSubmission.user = user;
        superSubmission.submission = submission;
        this.superSubmissions.push(superSubmission);
      });
    });
  }

  ngOnInit() {

  }

}
