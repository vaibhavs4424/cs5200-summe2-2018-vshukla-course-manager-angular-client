export class UserServiceCleint {


  findUserById(userId) {
    return fetch('https://young-garden-67805.herokuapp.com/api/user/' + userId, {
      credentials: 'include', // include, same-origin, *omit
    })
      .then(response => response.json());
  }

  profile() {
    return fetch('https://young-garden-67805.herokuapp.com/api/profile', {
      credentials: 'include', // include, same-origin, *omit
    })
      .then(response => response.json());
  }

  createUser(username, password, admin) {
    const user = {
      username: username,
      password: password,
      admin: admin
    };

    return fetch('https://young-garden-67805.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('https://young-garden-67805.herokuapp.com/api/logout', {
      method: 'POST',
      credentials: 'include',
    });
  }


  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://young-garden-67805.herokuapp.com/api/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }


  updateProfile(username, password, firstname, lastname, email) {
    const user = {
      username: username,
      password: password,
      firstName: firstname,
      lastName: lastname,
      email: email
    };
    return fetch('https://young-garden-67805.herokuapp.com/api/profile', {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}
