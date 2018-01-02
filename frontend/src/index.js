document.addEventListener("DOMContentLoaded",() => {
  Adapter.getCategories()
    .then(console.log("hello"))
    .then(() => Category.addCategoriesToDropdown("cat1"))
})
