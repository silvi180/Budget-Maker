class Event{

  static handlers() {
    document.getElementById('login-form').addEventListener('submit', Event.login);
    document.getElementById('form-div').addEventListener('submit', Event.formListener);
    document.getElementsByClassName('navbar')[0].addEventListener('click', () => Event.display(event.target.innerText));

  }

  static display(event) {
    switch(event) {
      case 'Edit Category':
        document.getElementById('edit-proposed-budget-div').style.display = 'initial';
        document.getElementById('create-proposed-budget-div').style.display = 'none';
        document.getElementById('add-transaction-div').style.display = 'none';
        document.getElementById('pie').style.display = 'none';
        break;
      case 'Create Budget':
        document.getElementById('create-proposed-budget-div').style.display = 'initial';
        document.getElementById('edit-proposed-budget-div').style.display = 'none';
        document.getElementById('add-transaction-div').style.display = 'none';
        document.getElementById('pie').style.display = 'none';
        break;
      case 'Add Purchase':
        document.getElementById('add-transaction-div').style.display = 'initial';
        document.getElementById('edit-proposed-budget-div').style.display = 'none';
        document.getElementById('create-proposed-budget-div').style.display = 'none';
        document.getElementById('pie').style.display = 'none';
        break;
      default:
        document.getElementById('add-transaction-div').style.display = 'none';
        document.getElementById('edit-proposed-budget-div').style.display = 'none';
        document.getElementById('create-proposed-budget-div').style.display = 'none'
        document.getElementById('pie').style.display = 'initial';
        let data = createDataArrayForBarChart()
        google.charts.setOnLoadCallback(() => drawChart(data));
        break;

    }
  }

  static formListener(event){

    event.preventDefault()
    let form = event.target
    handleSubmit(form)
      google.charts.setOnLoadCallback(drawChart);
  }

  static login(event) {
    event.preventDefault();
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;

    User.findOrCreateUser(firstname, lastname, email).then(function(user) {
      document.getElementById('user').innerHTML = `Hi, ${firstname} ${lastname}!`
      document.getElementsByClassName('login')[0].style.display = 'none';
      document.getElementsByClassName('jumbotron')[0].style.display = 'initial';
      Event.display("other")

      let selectExisting = document.getElementById("category-existing-0")
      Category.addCategoriesToDropdown(selectExisting, user.categories)
    })
  }

}
