import {Component, OnInit} from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceCleint} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private router: Router,
              private userService: UserServiceCleint,
              private activatedRoute: ActivatedRoute) {
  }

  quizId = '';
  quiz ;
  submission = {
    answers: []
  };

  submitQuiz = quiz => {
    this.quiz.submissionTime = new Date();
    this.service
      .submitQuiz(quiz)
      .then(submission => {
        console.log(submission);
        this.router.navigate(['/quiz/' + this.quiz._id + '/submission/' + submission._id]);
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.service
        .findQuizById(params['quizId'])
        .then(quiz => this.quiz = quiz));
  }

}
