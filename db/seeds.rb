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
job1 = Job.create(title: "Help plow next storm",
 description: Forgery(:lorem_ipsum).words(17),
 user_id: user2.id,
 address: "77 Summer St, Boston MA",
 lat: 42.3540205,
 lng: -71.0588729,
 hourly_rate: "1000",
 pic_url: user2.avatar.url)
job2 = Job.create(title: "Raking some leaves",
 description: Forgery(:lorem_ipsum).words(14),
 user_id: user.id,
 address: "Causway St, Boston MA",
 lat: 42.3656486,
 lng: -71.0607837,
 hourly_rate: "100",
 pic_url: user.avatar.url)
job3 = Job.create(title: "Walk my dogs each weekend",
 description: Forgery(:lorem_ipsum).words(17),
 user_id: user3.id,
 address: "100 State St, Boston MA",
 lat: 42.359283,
 lng: -71.0550435,
 hourly_rate: "1600",
 pic_url: user3.avatar.url)
job4 = Job.create(title: "Help moving furniture",
 description: Forgery(:lorem_ipsum).words(15),
 user_id: user2.id,
 address: "South Station, Boston MA",
 lat: 42.35187759999,
 lng: -71.0551042,
 hourly_rate: "10000",
 pic_url: user2.avatar.url)