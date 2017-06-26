Rails.application.routes.draw do
  root 'games#index'
  
  devise_for :users

  resources :games, only: [:index, :new, :show]
  resources :games, only: [:create, :update, :destroy],
    constraints: lambda { |req| req.format == :json }
end
