class companySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price
  has_many :card
end
