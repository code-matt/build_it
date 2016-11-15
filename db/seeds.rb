# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(email: "qq@qq.com", password: "12345678")
src = File.join(Rails.root,"client/public/test.png")
file = File.new(src)
user.avatar = file
user.save
job1 = Job.create(title: "Plowing Job Title",
 description: "Plowing with my plow and plower bros in the snow.",
 user_id: user.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3705967,
 lng: -71.23602439999999,
 start_date: Date.iso8601("2016-05-02"),
 start_time: "10:00:00",
 end_time: "13:00:00",
 hourly_rate: "1000",
 pic_url: user.avatar.url)
job2 = Job.create(title: "Raking Job title",
 description: "Rake some leaves for me this fall!",
 user_id: user.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3703967,
 lng: -71.23602439999999,
 start_date: Date.iso8601("2016-05-03"),
 start_time: "10:00:00",
 end_time: "13:00:00",
 hourly_rate: "100",
 pic_url: user.avatar.url)
job3 = Job.create(title: "Construction Job Title",
 description: "Hey, know how to use a hammer and nails? Join us on the construction site",
 user_id: user.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3708567,
 lng: -71.23602439999999,
 start_date: Date.iso8601("2016-05-01"),
 start_time: "10:00:00",
 end_time: "13:00:00",
 hourly_rate: "1600",
 pic_url: user.avatar.url)
job4 = Job.create(title: "Moving Job Title",
 description: "Like lifting heavy things? Come work with us for a day!",
 user_id: user.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3708967,
 lng: 31.23602439999999,
 start_date: Date.iso8601("2016-05-03"),
 start_time: "10:00:00",
 end_time: "13:00:00",
 hourly_rate: "10000",
 pic_url: user.avatar.url)