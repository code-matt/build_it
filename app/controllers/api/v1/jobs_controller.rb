module Api
  module V1
    class JobsController < ApplicationController
      before_action :authenticate_user

      def index
        coords = {lat: params["lat"], lng: params["lng"]}
        loc = Geokit::LatLng.new(coords[:lat],coords[:lng])
        jobs = Job.within(10,origin: loc)

        render json: jobs.to_json
      end

      def show
      end

    end
  end
end