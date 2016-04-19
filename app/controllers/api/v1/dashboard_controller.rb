module Api
  module V1
    class DashboardController < ApplicationController
      def index
        respond_to do |format|
          format.html { render partial: 'feed'}
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
