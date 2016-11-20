require 'json'
require 'open-uri'
module Api
  module V1
    class JobsController < ApplicationController
    before_action :authenticate_user, only: [:create, :signup, :is_signedup]
      def index
        coords = {lat: params["lat"], lng: params["lng"]}
        loc = Geokit::LatLng.new(coords[:lat],coords[:lng])
        jobs = Job.within(10,origin: loc)

        render json: jobs.to_json
      end

      def signup
        job = Job.find(params["jobId"])
        user = current_user
        owner = job.user
        if(owner != user)
          Contract.create(
            employee: user,
            job: job,
            user: owner
          )
          render json: {status: 'success'}
        else
          render json: {status: 'fail'}
        end
      end

      def is_signedup
        job = Job.find(params["jobId"])
        user = current_user
        contracts = Contract.where(job:job, employee: user)
        if contracts.length > 0
          render json: {contract: contracts[0].to_json}
        else
          render json: {contract: false}
        end
      end

      def create
        user = current_user
        lookup = Geocoder.search(params["job"]["address"])

        if(lookup[0] == nil)
          render json: {errors: ["Address is invalid!"]}
          return
        end

        loc = Geocoder.search(params["job"]["address"])[0].coordinates
        job = Job.new(job_params)
        job.user = current_user
        if(job.valid?)
          job.lat = loc[0]
          job.lng = loc[1]
          job.save
          render json: {status: 'success'}
        else
          render json: {errors: job.errors.full_messages}
        end
      end

      def job_params
        params.require(:job).permit(:title, :description, :address, :hourly_rate)
      end

    end
  end
end