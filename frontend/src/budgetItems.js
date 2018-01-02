let BudgetItems = (function createBudgetItemsClass(){
  const all = []
  return class BudgetItems{
    constructor(id, category_id, amount){
      this.id = id
      this.category_id = category_id
      this.amount = amount
      all.push(this)
    }

    static all() {
      return [...all]
    }

  }
})()
