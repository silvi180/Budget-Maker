let current_user = null;
const User = (function createUserClass() {
  const all = [];

  return class User {

    constructor(obj) {
      this.id = obj.id;
      this.email = obj.email;
      this.firstname = obj.firstname;
      this.lastname = obj.lastname;
      this.monthly_salary = obj.monthly_salary;
      this.rent = obj.rent;
      this.purchases = obj.purchases;
      this.proposeds = obj.proposeds;
      this.categories = obj.categories;
      all.push(this);
    }


    static all() {
      return [...all];
    }

    static findOrCreateUser(firstname, lastname, email) {
      const existing = User.all().find( user => user.firstname === firstname && user.lastname === lastname);

      if (existing) {
        current_user = existing;

        return Promise.resolve(existing);
      } else {
        return Adapter.createUser({firstname:firstname, lastname:lastname, email:email}).then(function(user) {
          current_user = user;
        });

      }
    }


  }

})()
