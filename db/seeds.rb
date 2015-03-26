# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
1.upto(200) do |i|
  School.create(:school_name => Faker::Company.name + " School",:us_news_ranking => rand(1..200),:acceptance_rate => rand(1..100), :LSAT => rand(100..200), :GPA => rand(1.0..99.99).round(2),:Total_applications =>rand(150..1000))
end