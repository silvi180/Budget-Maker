
const Category = (function createCategoryClass() {
  const all = [];

  return class Category {

    constructor(obj) {
      this.name = obj.name;
      all.push(this);
    }

    static all() {
      return [...all];
    }
    
  }

});()
