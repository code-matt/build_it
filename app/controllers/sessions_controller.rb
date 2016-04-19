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
    sign_in(resource_name, resource)
  end
end
