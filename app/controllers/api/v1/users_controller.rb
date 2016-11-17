class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user, only: [:is_profile_complete, :upload_profile_pic]
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
    user.save
    render json: {url: user.avatar.url(:marker)}
  end
end