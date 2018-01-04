document.addEventListener("DOMContentLoaded",() => {
  //we need to get the users categories and use only those for edit budgetItem otherwise
  //not sure whether to patch or post
  console.log("reloaded")
  Adapter.getCategories()
    .then(data => data.forEach((cat) => new Category(cat)))
    .then(() => {
      let selects = Array.from(document.getElementsByClassName("category-0"))
      selects.forEach((select) => {
        Category.addCategoriesToDropdown(select)
    })
  })

  Adapter.getUsers();
  Event.handlers();
})
