# class RegistrationsController < Devise::RegistrationsController
#   private
#
#   def sign_up_params
#     params.require(:user).permit(:first_name, :last_name,
#       :email, :password, :password_confirmation, :profile_photo)
#   end
# end
class RegistrationsController < Devise::RegistrationsController

  def create
    new_worker = Worker.new(worker_params)

    if new_worker.save
      set_flash_message :notice, :signed_up
      return render :json => {:success => true}
    else
      clean_up_passwords resource
      return render :json => {:success => false}
    end
  end

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
