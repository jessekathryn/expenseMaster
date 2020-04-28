class ActivitySerializer < ActiveModel::Serializer 
    attributes :id, :amount, :type, :date, :decription, :profile_id, :expense_for 

def date
    self.object.date.strftime(("%m/%d/%Y %I:%M%p")
end

end
