class Activity < ApplicationRecord
    belongs_to :profile
    validates :amount, presence: true
    validates_inclusion_of  :kind, :in => ['deposit', 'debit']

end