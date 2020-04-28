class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.decimal :amount
      t.string :type
      t.datetime :date
      t.string :descrription
      t.integer :profile_id
      t.string :expense_for
    end
  end
end
