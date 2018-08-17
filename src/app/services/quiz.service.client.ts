import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {

  submitQuiz = quiz =>
    fetch('https://young-garden-67805.herokuapp.com/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.json());

  createQuiz(quiz) {
  }

  loadDetailSubmission(quizId, submissionId) {
    return fetch('https://young-garden-67805.herokuapp.com/api/quiz/' + quizId + '/submission/' + submissionId ,
      {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        }}).then(
      response => response.json()
    );
  }

  loadSubmissions(quizId) {
    return fetch('https://young-garden-67805.herokuapp.com/api/quiz/' + quizId + '/submissions')
      .then(response => response.json());
  }

  findAllQuizzes = () =>
    fetch('https://young-garden-67805.herokuapp.com/api/quiz')
      .then(response => response.json());

  findQuizById = quizId =>
    fetch('https://young-garden-67805.herokuapp.com/api/quiz/' + quizId)
      .then(response => response.json());


}
