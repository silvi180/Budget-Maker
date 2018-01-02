class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :firstname
      t.string :lastname
      t.integer :monthly_salary
      t.integer :rent

      t.timestamps
    end
  end
end
