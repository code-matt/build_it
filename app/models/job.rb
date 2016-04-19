class Job < ActiveRecord::Base
  has_many :signups
  has_many :workers, through: :signups
end
