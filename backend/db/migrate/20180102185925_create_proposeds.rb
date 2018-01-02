class CreateProposeds < ActiveRecord::Migration[5.1]
  def change
    create_table :proposeds do |t|
      t.integer :budget
      t.belongs_to :category_id, foreign_key: true
      t.belongs_to :user_id, foreign_key: true

      t.timestamps
    end
  end
end
