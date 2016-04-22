module Api
  module V1
    class NavrouterController < ApplicationController
      skip_before_filter  :verify_authenticity_token

      def index
        @type = logged_in?
        if params[:task] == "load"
          render_partial('navbar')
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
