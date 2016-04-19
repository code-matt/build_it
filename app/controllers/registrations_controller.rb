class RegistrationsController < Devise::RegistrationsController

  def create
    new_worker = Worker.new(worker_params)

    if new_worker.save
      set_flash_message :notice, :signed_up
      return render :json => {:success => true}
    else
      clean_up_passwords resource
      @fields = new_worker.errors.keys.to_s.delete(':[] ').split(',')
      @errors = new_worker.errors.full_messages
      render :json => { errors: @errors, fields: @fields  }
    end
  end

  # Signs in a user on sign up. You can overwrite this method in your own
  # RegistrationsController.
  def sign_up(resource_name, resource)
    sign_in(resource_name, resource)
  end

  def worker_params
    params.require(:worker).permit(:email, :password, :password_confirmation)
  end

end
