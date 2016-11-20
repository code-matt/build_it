class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors.add attribute, (options[:message] || "Invalid email address format.") unless
      value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  end
end

class User < ActiveRecord::Base
  has_secure_password
  mount_uploader :avatar, AvatarUploader

  # this only needs to happen on creation since its stored encrypted after
  validates :email, :password, presence: true, if: :should_validate?
  validates :password, length: { minimum: 7 }, if: :should_validate?
  validates :email, uniqueness: true
  validates :email, email: true

  has_many :signups
  has_many :jobs, through: :signups

  def should_validate?
    new_record?
  end

  has_many :contracts
end