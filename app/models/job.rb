class Job < ActiveRecord::Base
  acts_as_mappable :lat_column_name => :lat, :lng_column_name => :lng, :default_units => :miles,
                   :default_formula => :sphere

  validates :description, length: { minimum: 20, maximum: 200}
  validates :title, length: { minimum: 10, maximum: 30}
  validates :hourly_rate, presence: true
  validates :hourly_rate, numericality: { greater_than: 0 }

  belongs_to :user

  has_many :signups
  has_many :users, through: :signups

  has_many :contracts
end