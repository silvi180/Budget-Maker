let counter = 1; //need to clear on switch tabs
const limit = 8;


  function handleAddInput(divName, className){

       if (counter === limit)  {
            alert("You have reached the limit of adding " + counter + " inputs");
       }
       else {

          const wrapper = document.createElement('div');
          wrapper.innerHTML=
            `<label for="category">Category: </label>
            <select class="${className}" id=${className}-${counter}></select>
            <label for="cost">Cost: </label>
            <input id="cost-${counter}" type="text" class="cost"><br>`

          const formDiv = document.getElementById(divName)
          formDiv.appendChild(wrapper)

          const lastSelect = document.getElementById(`${className}-${counter}`)

          let categories = getAppropiateCategoriesByClass(className)

          Category.addCategoriesToDropdown(lastSelect, categories)

          counter++;
       }
  }


  function getAppropiateCategoriesByClass(className){

    switch(className) {
    case "category-all":
        return Category.all()
    case "category-existing":
        return current_user.categories
    default:
      let returnCategories = []
      Category.all().forEach((cat) => {
        if (!current_user.categories.find(currCat => currCat.id === cat.id)){
          returnCategories.push(cat)
        }
      })
      return returnCategories
    }
  }


function handleSubmit(form){
  counter = 1;
  let formResults = {}
  let formPrices = Array.from(form.getElementsByClassName("cost"))
  let i = 0
  form.querySelectorAll("select").forEach((option) => {
      formResults[option.value] = formPrices[i].value
      i++
  })
  form.reset()


  switch(form.id) {
  case "add-transaction-form":
    for (cat_id in formResults) {
      let fields = {"category_id": cat_id, "user_id": current_user.id, "purchase": formResults[cat_id]}
      if (fields["purchase"]){
        Adapter.createPurchase(fields)
          .then(function(data) {
            current_user.purchases.push(data);
            Event.display("Home");
            Event.refreshSelect()
          });
        }
      }

    break;
  case "create-proposed-budget-form":
    for (cat_id in formResults) {
      let fields = {"category_id": cat_id, "user_id": current_user.id, "budget": formResults[cat_id]}
      if (fields["budget"]){
        Adapter.createProposed(fields)
          .then(data => {
            current_user.proposeds.push(data)
            current_user.categories.push(Category.getCatById(data.category_id))
            Event.display("Home");
            Event.refreshSelect()
          });
      }
    }
    const times = document.querySelectorAll('#add-budget-item-input div').length;
    for(let i = 1; i <= times; i++) {
      document.querySelectorAll('#add-budget-item-input div')[0].remove()
    }
    break;
  case "edit-proposed-budget-form":
    for (cat_id in formResults) {
      fields = {"category_id": cat_id, "user_id": current_user.id, "budget": formResults[cat_id]}
      Adapter.updateProposed(current_user.getProposedIdByCatId(cat_id), fields)
        .then(data => {
          current_user.editProposed(cat_id, data.budget)
          Event.display("Home");
          Event.refreshSelect()
        })
    }
      break;
  default:
  }


}
