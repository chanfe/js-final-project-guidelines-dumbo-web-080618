class User < ApplicationRecord
  has_many :cards
  has_many :company, through: :card
end
