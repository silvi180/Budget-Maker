class Category < ApplicationRecord
  has_many :transactions
  has_many :proposeds
  has_many :users, through: :transactions
  has many :users, through: :proposeds
end
