
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

    static addCategoriesToDropdown(id) {
      let select = document.getElementById(id)
      Category.all().forEach((category) =>{
      select.options[select.options.length] = new Option(category.name, category.id)
      // var option = document.createElement('option');
      // option.text = option.value = i;
      // select.add(option, 0);
      })
    }

  }

})()
