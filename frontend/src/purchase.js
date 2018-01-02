
const Purchase = (function createPurchaseClass() {

  const all = [];

  return class Purchase {

    constructor(obj) {
      this.purchase = obj.purchase;
      this.category_id = obj.category_id;
      this.user_id = obj.user_id;
      all.push(this);
    }

    static all() {
      return [...all];
    }

  }

});()
