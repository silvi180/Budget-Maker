document.addEventListener("DOMContentLoaded",() => {
  google.charts.load('current', {'packages':['bar']});

  Adapter.getCategories()
    .then(data => data.forEach((cat) => new Category(cat)))


  Adapter.getUsers()
  Event.handlers();
})
