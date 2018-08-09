export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('https://arcane-river-53780.herokuapp.com/api/course')
      .then(response => response.json());
  }

  findAllModulesForCourses(courseId) {
    return fetch('https://arcane-river-53780.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findAllLessonsForModule(courseId, moduleId) {
    return fetch('https://arcane-river-53780.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findAllTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch('https://arcane-river-53780.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

  findAllWidgets(courseId, moduleId, lessonId, topicId) {
    return fetch('https://arcane-river-53780.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
