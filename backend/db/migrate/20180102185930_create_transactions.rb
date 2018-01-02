class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.belongs_to :category_id, foreign_key: true
      t.belongs_to :user_id, foreign_key: true
      t.integer :transaction

      t.timestamps
    end
  end
end
