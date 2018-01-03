
class Adapter {

  static getCategories() {
    return fetch('http://localhost:3000/api/categories')
    .then(response => response.json());
  }

  static getUsers() {
    return fetch('http://localhost:3000/api/users').then(response => response.json());
  }

  static updateUser(id, fields) {
    return fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(fields),
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    }).then(response => response.json()).then(json => new User(json));;
  }

  static deleteUser(id) {
    return fetch(`http://localhost:3000/api/users/${id}`, { method: 'DELETE' }).then(response => response.json());
  }


}
