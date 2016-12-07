class Contract < ActiveRecord::Base
  belongs_to :user, foreign_type: 'owner'
  belongs_to :employee, class_name: 'User'
  belongs_to :job, class_name: 'Job'

  validates :proposal, length: { minimum: 20, maximum: 300}
end