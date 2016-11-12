# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "qq@qq.com", password: "12345678")
job1 = Job.create(title: "Plowing Job Title",
 description: "Plowing with my plow and plower bros in the snow.",
 user_id: User.first.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-02"),
 start_time: "10:00:00",
 end_time: "13:00:00",
 hourly_rate: "1000")
job2 = Job.create(title: "Raking Job title",
 description: "Rake some leaves for me this fall!",
 user_id: User.first.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-03"),
 start_time: "10:00:00",
 end_time: "13:00:00",
 hourly_rate: "100")
job3 = Job.create(title: "Construction Job Title",
 description: "Hey, know how to use a hammer and nails? Join us on the construction site",
 user_id: User.first.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-01"),
 start_time: "10:00:00",
 end_time: "13:00:00",
 hourly_rate: "1600")
job4 = Job.create(title: "Moving Job Title",
 description: "Like lifting heavy things? Come work with us for a day!",
 user_id: User.first.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-03"),
 start_time: "10:00:00",
 end_time: "13:00:00",
 hourly_rate: "10000")