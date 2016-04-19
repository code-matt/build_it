class RegistrationsController < Devise::RegistrationsController

  def create
    new_worker = Worker.new(worker_params)

    if new_worker.save
      set_flash_message :notice, :signed_up
      return render :json => {:success => true}
    else
      clean_up_passwords resource
      @errors = new_worker.errors.full_messages
      respond_to do |format|
      # format.html { render partial: 'change', locals: { apis: @apis }}
        format.html { render partial: 'registration_errors',
         locals: { errors: @errors }}
      end
      # return render :json => {:success => false}
    end
  end
  ##new_worker.errors.full_messages

  # Signs in a user on sign up. You can overwrite this method in your own
  # RegistrationsController.
  def sign_up(resource_name, resource)
    sign_in(resource_name, resource)
  end
    # binding.pry
  def worker_params
    params.require(:worker).permit(:email, :password, :password_confirmation)
  end

end
