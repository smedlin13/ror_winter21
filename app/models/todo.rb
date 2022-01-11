class Todo < ApplicationRecord

  validates :title, :desc, presence: true 
end
