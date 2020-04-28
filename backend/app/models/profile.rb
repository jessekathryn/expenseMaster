class Profile < ApplicationRecord
    has_many :activities
    validates :name, :balance, presence: true
end