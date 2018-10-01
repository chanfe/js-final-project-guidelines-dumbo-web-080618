class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :money
  has_many :card
end
