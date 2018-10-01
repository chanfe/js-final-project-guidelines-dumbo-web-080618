class UserSerializer < ActiveModel::Serializer
  attributes :id, :userId, :companyId
  belongs_to :user
  belongs_to :company
end
