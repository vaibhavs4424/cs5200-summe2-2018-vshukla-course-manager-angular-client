import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-submission',
  templateUrl: './quiz-submission.component.html',
  styleUrls: ['./quiz-submission.component.css']
})
export class QuizSubmissionComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe(params =>
      this.loadSubmissions(params['quizId']));
  }

  quizId = '';
  submissions = [];
  loadSubmissions(quizId) {
    this.quizId = quizId;
    this.service.loadSubmissions(this.quizId)
      .then(submissions => this.submissions = submissions);
  }

  ngOnInit() {
  }

}
