Rails.application.routes.draw do
  root 'games#index'
  
  devise_for :users

  resources :games, only: [:index]
  resources :games, only: [:create, :update, :show, :destroy],
    constraints: lambda { |req| req.format == :json }

end
