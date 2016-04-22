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
worker3 = Worker.create(email: "worker3@worker.com", password: "-worker3")
worker4 = Worker.create(email: "worker4@worker.com", password: "-worker4")
worker5 = Worker.create(email: "worker5@worker.com", password: "-worker5")
worker6 = Worker.create(email: "worker6@worker.com", password: "-worker6")
worker7 = Worker.create(email: "worker7@worker.com", password: "-worker7")
worker8 = Worker.create(email: "worker8@worker.com", password: "-worker8")
worker9 = Worker.create(email: "worker9@worker.com", password: "-worker9")
worker10 = Worker.create(email: "worker10@worker.com", password: "-worker10")


####CONTRACTOR
contractor1 = Contractor.create(email: "contractor1@contractor.com", password: "contractor1")
contractor2 = Contractor.create(email: "contractor2@contractor.com", password: "contractor2")
contractor3 = Contractor.create(email: "contractor3@contractor.com", password: "contractor3")
contractor4 = Contractor.create(email: "contractor4@contractor.com", password: "contractor4")
contractor5 = Contractor.create(email: "contractor5@contractor.com", password: "contractor5")
contractor6 = Contractor.create(email: "contractor6@contractor.com", password: "contractor6")
contractor7 = Contractor.create(email: "contractor7@contractor.com", password: "contractor7")
contractor8 = Contractor.create(email: "contractor8@contractor.com", password: "contractor8")
contractor9 = Contractor.create(email: "contractor9@contractor.com", password: "contractor9")
contractor10 = Contractor.create(email: "contractor10@contractor.com", password: "contractor10")


#JOB
job1 = Job.create(title: "Job1 Title",
 description: "But I must explain to you how all this nter consequences that are extremely painful. Nor again is there a resultant pleasure?",
 contractor_id: contractor8.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-02"),
 start_time: "10:00:00",
 end_time: "13:00:00")
job2 = Job.create(title: "Job2 Title, A longer title",
 description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was",
 contractor_id: contractor2.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-03"),
 start_time: "10:00:00",
 end_time: "13:00:00")
job3 = Job.create(title: "Job3 Title Title",
 description: "But I must explain to you how all this mistaken idea of denouncing pleasure or desires to obtain painm umstances occur in which toil and pain can procure hiain that produces no resultant pleasure?",
 contractor_id: contractor1.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-01"),
 start_time: "10:00:00",
 end_time: "13:00:00")
job4 = Job.create(title: "Job4 Title Title Title Title",
 description: "his mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer",
 contractor_id: contractor6.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-03"),
 start_time: "10:00:00",
 end_time: "13:00:00")
job5 = Job.create(title: "Job5 Title",
 description: "his mistaken idea of denouncing pleasure and praising",
 contractor_id: contractor3.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-04-29"),
 start_time: "10:00:00",
 end_time: "13:00:00")
job6 = Job.create(title: "Job6 Title",
 description: "his mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer",
 contractor_id: contractor5.id,
 address: "33 Harrison Ave. Boston, Ma",
 start_date: Date.iso8601("2016-05-02"),
 start_time: "10:00:00",
 end_time: "13:00:00")

 ##SIGNUP
 Signup.create(job: job1, worker: worker1)
 Signup.create(job: job1, worker: worker2)
 Signup.create(job: job1, worker: worker3)
 Signup.create(job: job1, worker: worker4)
 Signup.create(job: job4, worker: worker1)
 Signup.create(job: job5, worker: worker1)
 Signup.create(job: job2, worker: worker7)
 Signup.create(job: job3, worker: worker6)
 Signup.create(job: job2, worker: worker5)
 Signup.create(job: job2, worker: worker3)
 Signup.create(job: job3, worker: worker7)
