
class Pie {

  static userProposedBudget(categoryID) {
    const user = User.all().find(user => user.id === current_user.id);
    user.proposeds.forEach(function(category) {
      if (category.category_id === categoryID) {
        return budget;
      }
    });
  }


}
