class Category < ApplicationRecord
  has_many :purchases
  has_many :proposeds
  has_many :users, through: :purchases
  has_many :users, through: :proposeds
end
