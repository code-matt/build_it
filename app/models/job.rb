class Job < ActiveRecord::Base
  belongs_to :contractor
  has_many :signups
  has_many :workers, through: :signups
  has_many :events
end
