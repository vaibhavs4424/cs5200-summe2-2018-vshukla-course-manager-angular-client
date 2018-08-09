export class SectionServiceClient {

  SECTION_URL = 'https://young-garden-67805.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'https://young-garden-67805.herokuapp.com/api/student/section';

    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'https://young-garden-67805.herokuapp.com/api/section/' + sectionId + '/enrollment';

    return fetch(url, {
      method: 'POST',
      credentials: 'include'
    });
  }


  unenrollStudentInSection(sectionId) {
    const url = 'https://young-garden-67805.herokuapp.com/api/section/' + sectionId + '/unenrollment';

    return fetch(url, {
      method: 'POST',
      credentials: 'include'
    });
  }

  deleteSection(sectionId) {
    const url = 'https://young-garden-67805.herokuapp.com/api/section/' + sectionId;

    return fetch(url, {
      method: 'DELETE',
      credentials: 'include'
    });
  }

  editSection(sectionId, name, seats) {
    const url = 'https://young-garden-67805.herokuapp.com/api/section/' + sectionId;
    const section = {name, seats};

    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }


  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};

    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'POST',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
