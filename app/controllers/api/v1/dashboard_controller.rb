module Api
  module V1
    class DashboardController < ApplicationController
      before_action :authenticate!

      def index
        type = logged_in?

        if type == "worker"
          @events = Event.where(worker: current_worker).order('created_at DESC')
          respond_to do |format|
            format.html { render partial: 'worker_feed'}
          end
        elsif type == "contractor"
          @jobs = current_contractor.jobs
          respond_to do |format|
            format.html { render partial: 'contractor_feed'}
          end
        end
      end
    end
  end
end

module DashboardsHelper
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
