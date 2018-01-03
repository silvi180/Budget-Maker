document.addEventListener("DOMContentLoaded",() => {

  Adapter.getCategories()
    .then(data => data.forEach((cat) => new Category(cat)))
    .then(() => {
      let selects = Array.from(document.getElementsByClassName("category-0"))
      selects.forEach((select) => {
        Category.addCategoriesToDropdown(select)
    })
  })

  Adapter.getUsers();

  Event.handlers()
})
