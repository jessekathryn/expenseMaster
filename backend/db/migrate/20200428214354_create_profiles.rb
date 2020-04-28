class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :email
      t.decimal :balance
      t.decimal :debt
    end
  end
end
