class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def authenticate!
    if @current_worker == current_worker
        :authenticate_worker
    elsif @current_contractor == current_contractor
        :authenticate_contractor
    end
  end

  def logged_in?
    if current_worker
      "worker"
    elsif current_contractor
      "contractor"
    else
      nil
    end
  end
end
