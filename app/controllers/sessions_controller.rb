# class SessionsController < Devise::SessionsController
#   def create
#     # # try to authenticate as a User
#     # if current_contractor.nil?
#     #   self.resource = warden.authenticate(auth_options)
#     #   resource_name = self.resource_name
#     # end
#     #
#     # if resource.nil?
#     #   resource_name = :contractor
#     #   request.params[:contractor] = params[:worker]
#     #
#     #   self.resource = warden.authenticate!(auth_options.merge(scope: :contractor))
#     # end
#     #
#     # set_flash_message(:notice, :signed_in) if is_navigational_format?
#     # sign_in(resource_name, resource)
#     # respond_with resource, :location => after_sign_in_path_for(resource)
#     binding.pry
#     resource = Worker.find_for_database_authentication(email: params[:worker][:email])
#     return invalid_login_attempt unless resource
#
#     if resource.valid_password?(params[:worker][:password])
#       sign_in :worker, resource
#       render json: {status: "Success!!!1"}
#     end
#
#     invalid_login_attempt
#   end

#   protected
#
#   def invalid_login_attempt
#     set_flash_message(:alert, :invalid)
#     render json: flash[:alert], status: 401
#   end
# end
class SessionsController < Devise::SessionsController
  def create
    # try to authenticate as a User
    if current_contractor.nil?
      self.resource = warden.authenticate(auth_options)
      resource_name = self.resource_name
    end

    if resource.nil?
      resource_name = :contractor
      request.params[:contractor] = params[:worker]

      self.resource = warden.authenticate!(auth_options.merge(scope: :contractor))
    end
    respond_to do |format|
      format.json { render :json => {status: "WOOOOOOO DOOOO ODODODOD"}.to_json }
    end
    # set_flash_message(:notice, :signed_in) if is_navigational_format?
    sign_in(resource_name, resource)
    # render json: {status: "Success!!!1"}
    # respond_to do |format|
    #   format.json { render :json => {status: "WOOOOOOO DOOOO ODODODOD"}.to_json }
    # end
    # respond_with resource, :location => after_sign_in_path_for(resource)
  end
end
