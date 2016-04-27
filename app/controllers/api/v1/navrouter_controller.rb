module Api
  module V1
    class NavrouterController < ApplicationController
      skip_before_filter  :verify_authenticity_token

      def index
        @type = logged_in?

        if params[:task] == "load"
          render_partial('navbar')
        end

        if params[:task] == "search"
          render_partial('search')
        end

        if params[:task] == "search-query"
          @results = Job.where("description LIKE ?" , "%#{params[:query]}%")
          respond_to do |format|
            format.html { render partial: "search_results", locals: { results: @results }}
          end
        end

        if params[:task] == "controlpannel"
          @jobs = current_worker.jobs
          @worker = current_worker
          respond_to do |format|
            format.html { render partial: 'worker_controlpannel'}
          end
        end
        
      end
      def show
        @job = Job.find(params[:id])
        respond_to do |format|
          format.html { render partial: "show_job"}
        end
      end

      def render_partial(partial)
        respond_to do |format|
          format.html { render partial: partial}
        end
      end
    end
  end
end

module NavrouterHelper
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
