class Job < ActiveRecord::Base
  acts_as_mappable :lat_column_name => :lat, :lng_column_name => :lng, :default_units => :miles,
                   :default_formula => :sphere

  belongs_to :user

  has_many :signups
  has_many :users, through: :signups

  has_many :contracts
end