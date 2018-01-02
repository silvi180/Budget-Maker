
const Proposed = (function createProposedClass() {

  const all = [];

  return class Proposed {

    constructor(obj) {
      this.budget = obj.budget;
      this.category_id = obj.category_id;
      this.user_id = obj.user_id;
      all.push(this);
    }

    static all() {
      return [...all];
    }

  }

});()
