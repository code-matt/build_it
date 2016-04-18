class HomeController < ApplicationController
  before_action :authenticate!

  def index
    @type = logged_in?
  end
end
