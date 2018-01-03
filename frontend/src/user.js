
const User = (function createUserClass() {
  const all = [];

  return class User {

    constructor(obj) {
      this.email = obj.email;
      this.firstname = obj.firstname;
      this.lastname = obj.lastname;
      this.monthly_salary = obj.monthly_salary;
      this.rent = obj.rent;
      all.push(this);
    }

    static all() {
      return [...all];
    }

    static findOrCreateUser(firstname, lastname, email) {
      console.log("hi")
      const existing = User.all().find( user => user.firstname === firstname && user.lastname === lastname);

      if (existing) {
        return Promise.resolve(existing);
      } else {
        return Adapter.createUser({firstname:firstname, lastname:lastname, email:email});
        // Adapter.createUser({firstname:firstname, lastname:lastname, email:email})
        // .then(console.log)
      }
    }


  }

})()
