class ActivitySerializer < ActiveModel::Serializer 
    attributes :id, :amount, :kind, :date, :description, :profile_id, :expense_for 
    
# def date
#     self.object.date.strftime("%m/%d/%Y %I:%M%p")
# end

end
