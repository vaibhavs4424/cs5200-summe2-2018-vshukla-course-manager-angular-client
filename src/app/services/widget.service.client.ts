export class WidgetServiceClient {
  findAllWidgetsForLesson(topicId) {
    return fetch('https://arcane-river-53780.herokuapp.com/api/topic/' + 1 + '/widget')
      .then(response => response.json());
  }
}
