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
user4 = User.create(
  email: "ll@ll.com",
  password: "12345678",
  first_name: "Brett",
  last_name: "Mordas",
  location: "Waltham", 
  profile_finished: true)
src = File.join(Rails.root,"client/public/marker_image.png")
file = File.new(src)
src1 = File.join(Rails.root,"client/public/seed_1.png")
file1 = File.new(src1)
src2 = File.join(Rails.root,"client/public/seed_2.png")
file2 = File.new(src2)
src3 = File.join(Rails.root,"client/public/seed_3.jpeg")
file3 = File.new(src3)
user.avatar = file
user.save
user2.avatar = file1
user2.save
user3.avatar = file2
user3.save
user4.avatar = file3
user4.save
job1 = Job.create(title: "Plowing Job Title",
 description: "Plowing with my plow and plower bros in the snow.",
 user_id: user2.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3705967,
 lng: -71.23602439999999,
 hourly_rate: "1000",
 pic_url: user2.avatar.url)
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
 pic_url: user3.avatar.url)
job4 = Job.create(title: "Moving Job Title",
 description: "Like lifting heavy things? Come work with us for a day!",
 user_id: user2.id,
 address: "33 Harrison Ave. Boston, Ma",
 lat: 42.3708967,
 lng: 31.23602439999999,
 hourly_rate: "10000",
 pic_url: user2.avatar.url)
 job5 = Job.create(title: "Washing dishes",
 description: "Need some help washing dishes",
 user_id: user4.id,
 address: "66 Durbin st, Watertown MA",
 lat: 42.3702967,
 lng: 31.23502439999999,
 hourly_rate: "10000",
 pic_url: user4.avatar.url)