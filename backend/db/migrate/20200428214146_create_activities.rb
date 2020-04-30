class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.integer :profile_id
      t.decimal :amount
      t.string :kind
      t.datetime :date
      t.string :description
      t.string :expense_for
    end
  end
end
