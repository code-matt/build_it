class IndexController < ApplicationController
  def index
    render :file => 'client/build/index.html' and return
  end
end