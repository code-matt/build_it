class RegistrationsController < Devise::RegistrationsController

  def create
    type = params.keys[1]

    if type == "worker"
      new_worker = Worker.new(worker_params)

      if new_worker.save
        Event.create(name: "new_signup_notice",
         job: nil,
         worker: new_worker,
         contractor: nil)
        set_flash_message :notice, :signed_up
        sign_in(:worker, new_worker)
        return render :json => {:success => true}
      else
        clean_up_passwords resource
        @fields = new_worker.errors.keys.to_s.delete(':[] ').split(',')
        @errors = new_worker.errors.full_messages
        render :json => { errors: @errors, fields: @fields  }
      end
    end

    if type == "contractor"
      new_contractor = Contractor.new(contractor_params)

      if new_contractor.save
        Event.create(name: "new_signup_notice",
         job: nil,
         worker: nil,
         contractor: new_contractor)
        set_flash_message :notice, :signed_up
        sign_in(:contractor, new_contractor)
        return render :json => {:success => true}
      else
        clean_up_passwords resource
        @fields = new_worker.errors.keys.to_s.delete(':[] ').split(',')
        @errors = new_worker.errors.full_messages
        render :json => { errors: @errors, fields: @fields  }
      end
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

  def contractor_params
    params.require(:contractor).permit(:email, :password, :password_confirmation)
  end

end
