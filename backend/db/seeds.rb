# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cat1 = Category.create(name: "Car Payment")
cat2 = Category.create(name: "Childcare")
cat3 = Category.create(name: "Clothing")
cat4 = Category.create(name: "Debt Payments")
cat5 = Category.create(name: "Entertainment")
cat6 = Category.create(name: "Gas and Tolls")
cat7 = Category.create(name: "Gifts")
cat8 = Category.create(name: "Groceries")
cat9 = Category.create(name: "Healthcare")
cat10 = Category.create(name: "Insurance")
cat11 = Category.create(name: "Miscellaneous")
cat12 = Category.create(name: "Restaurants")
cat13 = Category.create(name: "Savings")
cat14 = Category.create(name: "Utilities, Cable, Internet, and Phone")
cat15 = Category.create(name: "Vaccation")


user1 = User.create(email: "schung@flatiron.com", firstname: "Silvia", lastname: "Chung", monthly_salary: 3000, rent: 1300)
user2 = User.create(email: "rlevi@flatiron.com", firstname: "Rochel", lastname: "Levi", monthly_salary: 4000, rent: 1500)

Purchase.create(purchase: 50, user_id: user1.id, category_id: cat9.id)
Proposed.create(budget: 600, category_id: cat9.id, user_id: user1.id)

Purchase.create(purchase: 50, user_id: user2.id, category_id: cat3.id)
Proposed.create(budget: 600, category_id: cat3.id, user_id: user2.id)
