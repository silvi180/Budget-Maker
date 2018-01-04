
function userProposedBudget(categoryID) {
  let budget;
  current_user.proposeds.forEach(function(category) {
    if (category.category_id === categoryID) {
      budget =  category.budget;
    }
  });
  return budget
}

function createDataArrayForBarChart() {
  const merged_array = [['category', 'Budget', 'Spent Amount']];
  const budgetArray = createBudgetArray();
  budgetArray.forEach(budget => merged_array.push(budget));
  const spendingArray = createActualSpendingArray();

  spendingArray.forEach((expense) => {
    if (merged_array.find(array => array[0] === expense[0])){
      merged_array.find(array => array[0] === expense[0]).push(expense[1])
    }
    else{
      merged_array.push([expense[0],0,expense[1]])
    }

  })

  merged_array.forEach( function(array) {
    if (array.length == 2) {
      array.push(0)
    }
  })
  return merged_array
}

function createBudgetArray(){
  const budgetCats = [];
  current_user.categories.forEach((cat) => {
    budgetCats.push([cat.name, userProposedBudget(cat.id)])
  });
  return budgetCats;
}

function createActualSpendingArray() {
  spendingCats = []
  tempSpendingObj = {}
  current_user.purchases.forEach((transaction) => {
    if (tempSpendingObj[transaction.category_id]){
      tempSpendingObj[transaction.category_id] += transaction.purchase
    }
    else{
      tempSpendingObj[transaction.category_id] = transaction.purchase
    }

  })

  for (catId in tempSpendingObj) {
    let catName = Category.getNameById(parseInt(catId))
    let catAmt = tempSpendingObj[catId]
    spendingCats.push([catName, catAmt])
  }
  return spendingCats
}


  function drawChart() {
    let data = google.visualization.arrayToDataTable(createDataArrayForBarChart());

    let options = {
      chart: {
        title: 'Your Expenses',
        subtitle: 'Try to save if you can',
      },
      bars: 'horizontal' // Required for Material Bar Charts.
    };

    let chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
