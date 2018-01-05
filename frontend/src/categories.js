
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
      dropdownElement.innerHTML = null
        categories.forEach((category) =>{
          let option = document.createElement('option');
          option.text = category.name;
          option.value = category.id;
          dropdownElement.add(option);
        })
    }

    static getCatById(id){
      let category = Category.all().find((cat) => cat.id === id)
      return category
    }


  }

})()
