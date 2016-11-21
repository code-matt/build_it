class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user, only: [
                                            :is_profile_complete,
                                            :upload_profile_pic,
                                            :edit_profile,
                                            :profile,
                                            :getId]
  def create
    user = User.new(user_params)
    if user.valid? 
      user.save
      render json: {status: "success"}
    else
      render json: {errors: user.errors}
    end
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def is_profile_complete
    user = current_user
    if user.profile_finished
      render json: {status: "true"}
    else
      render json: {status: "false"}
    end
  end

  def upload_profile_pic
    user = current_user
    file = params["file"]
    user.avatar = file
    user.save(:validate => false)
    render json: {
      url: user.avatar.url(:marker),
      upload: user.avatar.url
    }
  end

  def edit_profile
    user = current_user
    user.first_name = sanitize(params[:data][:firstName])
    user.last_name = sanitize(params[:data][:lastName])
    user.location = sanitize(params[:data][:location])
    if(user.valid?)
      user.save
      render json: test_profile(current_user)
    else
      render json: {errors: user.errors.to_json}
    end
  end

  def getId
    user = current_user
    render json: {id: user.id}
  end

  def profile
    user = current_user
    render json: {
      firstName: user.first_name,
      lastName: user.last_name,
      location: user.location,
      picUrl: user.avatar.url
    }
  end

  def test_profile(user)
    if user.first_name && user.last_name && user.avatar.url
      user.profile_finished = true
      user.save
      { status: 'success' }
    else
      { status: false }
    end
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end