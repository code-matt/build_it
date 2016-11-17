Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount Knock::Engine => "/knock"
      get '/profilecheck', to: 'users#is_profile_complete'
      post '/profilepic', to: 'users#upload_profile_pic'
      resources :users, only: [:create]
      resources :jobs, only: [:create, :index, :show]
    end
  end
end
