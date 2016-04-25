module Api
  module V1
    class SignupController < ApplicationController
      def index
        respond_to do |format|
          format.html { render partial: 'type_selection'}
        end
      end

      def show
        type = params[:type]

        if type == "worker"
          respond_to do |format|
            format.html { render partial: 'worker_signup_form'}
          end
        end

        if type == "contractor"
          respond_to do |format|
            format.html { render partial: 'contractor_signup_form'}
          end
        end
      end

      def job
        Signup.create(job: Job.find(params[:id]), worker: current_worker)
      end

      def resign
        signup = Signup.where(job: Job.find(params[:id]), worker: current_worker)
        Signup.destroy(signup)

        render json: {status: "success!"}
      end

    end
  end
end

module SignupsHelper
  def resource_name
    :worker
  end

  def resource
    @resource ||= Worker.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:worker]
  end
end
