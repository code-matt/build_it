# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(
  email: "qq@qq.com",
  password: "12345678", 
  profile_finished: false)
user2 = User.create(
  email: "ee@ee.com",
  password: "12345678",
  first_name: "Matt",
  last_name: "Thompson",
  location: "Waltham",
  profile_finished: true)
user3 = User.create(
  email: "ww@ww.com",
  password: "12345678",
  first_name: "Brett",
  last_name: "Mordas",
  location: "Waltham", 
  profile_finished: true)
src = File.join(Rails.root,"client/public/marker_image.png")
file = File.new(src)
user.avatar = file
user.save
user2.avatar = file
user2.save
user3.avatar = file
user3.save
job1 = Job.create(title: "Plowing Job Title",
 description: "Plowing with my plow and plower bros in the snow.",
 user_id: user2.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3705967,
 lng: -71.23602439999999,
 hourly_rate: "1000",
 pic_url: user.avatar.url)
job2 = Job.create(title: "Raking Job title",
 description: "Rake some leaves for me this fall!",
 user_id: user.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3703967,
 lng: -71.23602439999999,
 hourly_rate: "100",
 pic_url: user.avatar.url)
job3 = Job.create(title: "Construction Job Title",
 description: "Hey, know how to use a hammer and nails? Join us on the construction site",
 user_id: user3.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3708567,
 lng: -71.23602439999999,
 hourly_rate: "1600",
 pic_url: user.avatar.url)
job4 = Job.create(title: "Moving Job Title",
 description: "Like lifting heavy things? Come work with us for a day!",
 user_id: user2.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3708967,
 lng: 31.23602439999999,
 hourly_rate: "10000",
 pic_url: user.avatar.url)