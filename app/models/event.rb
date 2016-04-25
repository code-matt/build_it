class Event < ActiveRecord::Base
  belongs_to :worker
  belongs_to :job
  belongs_to :contractor
end
