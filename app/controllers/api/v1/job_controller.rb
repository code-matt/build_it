module Api
  module V1
    class JobController < ApplicationController
      before_action :authenticate_user

      def index
        render json: Job.all.to_json
      end

      def show
      end

    end
  end
end