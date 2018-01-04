
  function userProposedBudget(categoryID) {
    let budget;
    current_user.proposeds.forEach(function(category) {
      if (category.category_id === categoryID) {
        budget =  category.budget;
      }
    });
    return budget
  }

  function createBudgetArray(){
    budgetCats = [['category', '']]
    current_user.categories.forEach((cat) => {
      budgetCats.push([cat.name, userProposedBudget(cat.id)])
    });
    return budgetCats;
  }

  function createActualSpendingArray() {
    spendingCats = [['category', 'amtSpent']]
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

    let oldData = google.visualization.arrayToDataTable(createBudgetArray());

    let newData = google.visualization.arrayToDataTable(createActualSpendingArray());

    let options = { pieSliceText: 'none' };

    let chartBefore = new google.visualization.PieChart(document.getElementById('piechart_before'));
    let chartAfter = new google.visualization.PieChart(document.getElementById('piechart_after'));
    let chartDiff = new google.visualization.PieChart(document.getElementById('piechart_diff'));

    chartBefore.draw(oldData, options);
    chartAfter.draw(newData, options);

    let diffData = chartDiff.computeDiff(oldData, newData);
    chartDiff.draw(diffData, options);
  }
