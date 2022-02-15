Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get '/about', to: 'pages#home'
  get '/blog', to: 'pages#home'
  get '/blog/:category', to: 'pages#home'

  get '/discover', to: 'pages#home'
  get '/events', to: 'pages#home'

  resources :emails, only: [:new, :create]
end
