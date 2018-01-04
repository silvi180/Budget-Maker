
const Category = (function createCategoryClass() {
  const all = [];

  return class Category {

    constructor(obj) {
      this.id = obj.id;
      this.name = obj.name;
      all.push(this);
    }

    static all() {
      return [...all];
    }

    static addCategoriesToDropdown(dropdownElement, categories) {
      // let selects = Array.from(document.getElementsByClassName(className))
      // selects.forEach((select) => {
        categories.forEach((category) =>{
        // select.options[select.options.length] = new Option(category.name, category.id)
          let option = document.createElement('option');
          option.text = category.name;
          option.value = category.id;
          dropdownElement.add(option);
        })
      // })
    }

    static getNameById(id){
      let category = Category.all().find((cat) => cat.id === id)
      return category.name
    }

  }

})()
