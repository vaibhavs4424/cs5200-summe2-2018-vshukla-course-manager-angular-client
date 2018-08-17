import {Component, OnInit} from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceCleint} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private userService: UserServiceCleint) {
  }

  quizzes = [];
  user = {};

  ngOnInit() {
    this.userService.profile().then(user => {
      this.userService.findUserById(user._id).then(newUser => this.user = newUser)
      console.log(this.user);
    });
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
  }

}
