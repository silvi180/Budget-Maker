class User < ApplicationRecord
  has_many :transactions
  has_many :proposeds
  has_many :categories, through: :transactions
  has many :categories, through: :proposeds
end
