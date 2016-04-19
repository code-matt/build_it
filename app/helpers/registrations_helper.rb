module RegistrationsHelper
  def resource_name
    :worker
  end

  def resource
    @resource ||= resource_name.to_s.classify.constantize.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[resource_name]
  end
end
