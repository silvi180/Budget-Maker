class UserSerializer < ActiveModel::Serializer
  attributes :id,:email, :firstname, :lastname, :monthly_salary, :rent
  has_many :transactions
  has_many :proposeds
  has_many :categories, through: :transactions
  has many :categories, through: :proposeds
end
