  let counter = 1; //need to clear on submit
  const limit = 8;

  function handleAddInput(divName){
       if (counter == limit)  {
            alert("You have reached the limit of adding " + counter + " inputs");
       }
       else {
            const newInput =
              `<label for="category">Category: </label>
              <select class="category-${counter}" name=""></select>
              <label for="cost">Cost: </label>
              <input id="cost-${counter}" type="text" name="" value=""><br>`
            const formDiv = document.getElementById(divName)
            formDiv.innerHTML += newInput
            const lastSelect = formDiv.getElementsByClassName(`category-${counter}`)[0]
            Category.addCategoriesToDropdown(lastSelect)
            counter++;
       }
  }

  function handleSubmit(form){
    counter = 1;

    form.querySelectorAll("select").forEach((option) => {console.log(option.value)})

    switch(form.id) {
    case "add-transaction-form":
        console.log(form.id)
        break;
    case "create-proposed-budget-form":
        console.log(form.id)
        break;
    case "edit-proposed-budget-form":
        console.log(form.id)
        break;
    default:
        console.log(form.id)
    }

  }
