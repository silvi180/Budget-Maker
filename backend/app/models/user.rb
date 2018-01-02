class User < ApplicationRecord
  has_many :purchases
  has_many :proposeds
  has_many :categories, through: :purchases
  has_many :categories, through: :proposeds
end
