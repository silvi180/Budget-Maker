
class Pie {

  static userProposedBudget() {
    User.all().find(user => user.id === current_user.id)
  }
}
