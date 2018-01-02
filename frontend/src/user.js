
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

  }

})()
