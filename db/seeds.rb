# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Worker(id: integer, email: string, encrypted_password: string, reset_password_token: string, reset_password_sent_at: datetime, remember_created_at: datetime, sign_in_count: integer, current_sign_in_at: datetime, last_sign_in_at: datetime, current_sign_in_ip: inet, last_sign_in_ip: inet, created_at: datetime, updated_at: datetime)
# Contractor(id: integer, email: string, encrypted_password: string, reset_password_token: string, reset_password_sent_at: datetime, remember_created_at: datetime, sign_in_count: integer, current_sign_in_at: datetime, last_sign_in_at: datetime, current_sign_in_ip: inet, last_sign_in_ip: inet, created_at: datetime, updated_at: datetime)
# Signup(id: integer, job_id: integer, worker_id: integer, created_at: datetime, updated_at: datetime)
# Job(id: integer, title: string, description: string, contractor_id: integer, created_at: datetime, updated_at: datetime)

####WORKER
worker1 = Worker.create(email: "worker1@worker.com", password: "-worker1")
worker2 = Worker.create(email: "worker2@worker.com", password: "-worker2")


####CONTRACTOR
contractor1 = Contractor.create(email: "contractor1@contractor.com", password: "contractor1")
contractor2 = Contractor.create(email: "contractor2@contractor.com", password: "contractor2")
contractor3 = Contractor.create(email: "contractor3@contractor.com", password: "contractor3")

#JOB
job1 = Job.create(title: "Plowing Job Title",
 description: "Plowing with my plow and plower bros in the snow.",
 contractor_id: contractor1.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-02"),
 start_time: "10:00:00",
 end_time: "13:00:00")
job2 = Job.create(title: "Raking Job title",
 description: "Rake some leaves for me this fall!",
 contractor_id: contractor2.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-03"),
 start_time: "10:00:00",
 end_time: "13:00:00")
job3 = Job.create(title: "Construction Job Title",
 description: "Hey, know how to use a hammer and nails? Join us on the construction site",
 contractor_id: contractor3.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-01"),
 start_time: "10:00:00",
 end_time: "13:00:00")
job4 = Job.create(title: "Moving Job Title",
 description: "Like lifting heavy things? Come work with us for a day!",
 contractor_id: contractor2.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-03"),
 start_time: "10:00:00",
 end_time: "13:00:00")

 ##SIGNUP
 Signup.create(job: job1, worker: worker1)
 Signup.create(job: job1, worker: worker2)

  Event.create(name: "new_signup",
    job: job1,
    worker: worker1,
    contractor: contractor1)

  Event.create(name: "new_signup",
   job: job2,
   worker: worker1,
   contractor: contractor2)

  Event.create(name: "resign_job",
    job: job3,
    worker: worker1,
    contractor: contractor3)
