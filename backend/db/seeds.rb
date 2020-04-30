# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

profile_1 = Profile.create(name: 'Checking', balance: '20.00', debt: '-55.00')
profile_2 = Profile.create(name: 'Checking', balance: '20.00', debt: '-55.00')
activity_1 = Activity.create(profile_id: '1', amount: '20.00', kind: 'deposit', date: 'DateTime.now', description: 'Subway', expense_for: 'Meal' )
activity_2 = Activity.create(profile_id: '1', amount: '20.00', kind: 'debit', date: 'DateTime.now', description: 'Subway', expense_for: 'Meal' )