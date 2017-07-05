Rails.application.routes.draw do
  root 'games#index'
  
  devise_for :users

  resources :games, only: [:index, :new, :show]
  resources :games, only: [:create, :update, :destroy],
    constraints: lambda { |req| req.format == :json }

  resources :the_great_war, only: [:show]
end
