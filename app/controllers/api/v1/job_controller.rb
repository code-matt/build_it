module Api
  module V1
    class JobController < ApplicationController
      skip_before_filter  :verify_authenticity_token

      def create
        new_job = Job.new(job_params)
        new_job.contractor = current_contractor
        if new_job.save
          Event.create(name: "new_job",
           job: new_job,
           worker: nil,
           contractor: current_contractor)
          return render :json => {:success => true}
        else
          @fields = new_worker.errors.keys.to_s.delete(':[] ').split(',')
          @errors = new_worker.errors.full_messages
          render :json => { errors: @errors, fields: @fields  }
        end
      end

      def job_params
        params.require(:job).permit(:start_time, :start_date, :end_time, :title, :description, :address)
      end

    end
  end
end

module JobHelper
  def resource_name
    :job
  end

  def resource
    @resource ||= Job.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:job]
  end
end
