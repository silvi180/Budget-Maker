
class Pie {

  static userProposedBudget(categoryID) {
    current_user.forEach(function(category) {
      if (category.category_id === categoryID) {
        return budget;
      }
    });
  }

  // static userPurchase(categoryID) {
  //   current_user.forEach(function(category) {
  //     if (category.category_id === categoryID) {
  //       categro
  //     }
  //   });
  // }

  static createBudgetArray(){
    budgetCats = []
    current_user.categories.forEach((cat) => {
      budgetCats.push([cat.name, userProposedBudget(cat.id)])
    });
    return budgetCats;
  }

}
