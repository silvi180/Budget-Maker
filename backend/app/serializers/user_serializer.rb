class UserSerializer < ActiveModel::Serializer
  attributes :id,:email, :firstname, :lastname, :monthly_salary, :rent
  has_many :purchases
  has_many :proposeds
  has_many :categories, through: :purchases
  has_many :categories, through: :proposeds
end
