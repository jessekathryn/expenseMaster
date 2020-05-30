class Profile < ApplicationRecord
    has_many :activities
    validates :name, :balance, presence: true

def update_balance(activity)
    if activity.kind == 'deposit'
        self.balance = self.balance + activity.amount
        self.debt = self.debt - activity.amount
        self.save
    elsif activity.kind == 'debit'
        if self.balance >= activity.amount
          self.balance = self.balance - activity.amount
          self.save
        else
          return 'Balance too low.'
        end
      end
    end

def update_balance_on_delete(activity)
    if activity.kind == 'deposit'
      if self.balance >= activity.amount
        self.balance = self.balance - activity.amount
        self.save
        else
            return 'Balance too low'
        end
    elsif
        activity.kind == 'debit' 
        self.balance = self.balance + activity.amount
        self.save
    end
end
    
end