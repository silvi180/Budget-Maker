
class Adapter {

  static getCategories() {
    return fetch('http://localhost:3000/api/categories')
    .then(response => response.json());
  }

  static getUsers() {
    return fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(obj => obj.map(user => new User(user)))
  }

  static createUser(fields) {
    return fetch(`http://localhost:3000/api/users`, {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    }).then(response => response.json()).then(json => new User(json));;
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

  // static deleteUser(id) {
  //   return fetch(`http://localhost:3000/api/users/${id}`, { method: 'DELETE' }).then(response => response.json());
  // }

  static createPurchase(fields) {
    return fetch(`http://localhost:3000/api/purchases`, {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    }).then(response => response.json());;
  }

  static updatePurchase(id, fields) {
    return fetch(`http://localhost:3000/api/purchases/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(fields),
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    }).then(response => response.json()).then(json => new Purchase(json));;
  }

  static deletePurchase(id) {
    return fetch(`http://localhost:3000/api/purchases/${id}`, { method: 'DELETE' }).then(response => response.json());
  }


  static createProposed(fields) {
    return fetch(`http://localhost:3000/api/proposeds`, {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    }).then(response => response.json());;
  }

  static updateProposed(id, fields) {
    return fetch(`http://localhost:3000/api/proposeds/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(fields),
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    }).then(response => response.json());
  }

  static deleteProposed(id) {
    return fetch(`http://localhost:3000/api/proposeds/${id}`, { method: 'DELETE' }).then(response => response.json());
  }

}
