class Story < ApplicationRecord
  has_many :comments, dependent: :destroy
end
