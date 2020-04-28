class ProfileSerializer < ActiveModel::Serializer
    attributes :id, :name, :balance, :debt
    has_many :activities

end