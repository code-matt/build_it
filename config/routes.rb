Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount Knock::Engine => "/knock"
      get '/profilecheck', to: 'users#is_profile_complete'
      get '/signupcheck', to: 'jobs#is_signedup'
      get '/profile', to: 'users#profile'
      post '/profilepic', to: 'users#upload_profile_pic'
      post '/edit_user', to: 'users#edit_profile'
      post '/signup', to: 'jobs#signup'
      resources :jobs, only: [:create, :index]
      resources :users, only: [:create]
    end
  end
end
