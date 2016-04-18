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

    set_flash_message(:notice, :signed_in) if is_navigational_format?
    sign_in(resource_name, resource)
    respond_with resource, :location => after_sign_in_path_for(resource)
  end
end
