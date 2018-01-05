document.addEventListener("DOMContentLoaded",() => {
  google.charts.load('current', {'packages':['bar']});

  Adapter.getCategories()
    .then(data => data.forEach((cat) => new Category(cat)))
    // .then(() => {
    //   let select = document.getElementsByClassName("category-all-0")[0]
    //   Category.addCategoriesToDropdown(select, Category.all())
    // })



  Adapter.getUsers()
  Event.handlers();
})
