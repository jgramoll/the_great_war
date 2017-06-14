Rails.application.routes.draw do
  resources :games, only: [:index]
  resources :games, only: [:create, :update, :show, :destroy],
    constraints: lambda { |req| req.format == :json }

  root 'games#index'
end
