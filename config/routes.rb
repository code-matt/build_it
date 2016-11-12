Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount Knock::Engine => "/knock"
      resources :users, only: [:create]
      resources :jobs, only: [:create, :index, :show]
    end
  end
end
