class Profile < ApplicationRecord
    has_many :activities
    validates :name, :balance, presence: true



def update_balance(activity)
    if activity.type == 'deposit'
        self.balance = self.balance + activity.amount
        self.save
    elsif activity.type == 'debit'
        if self.balance >= activity.amount
          self.balance = self.balance - activity.amount
          self.save
        else
          return 'Balance too low.'
        end
      end
    end

def update_balance_on_delete(activity)
    if activity.type == 'deposit'
        self.balance >= activity.amount
        self.balance = self.balance - activity.amount
        self.save
        else
            return 'Balance too low'
        end
    elsif
        activity.type == 'debit' 
        self.balance = self.balance + activity.amount
        self.save
    end
end
    
end