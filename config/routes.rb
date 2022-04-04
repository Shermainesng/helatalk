Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  devise_for :users
  root to: 'pages#home'

  get '/about', to: 'pages#home'

  # get '/blogs', to: 'pages#home'
  get '/blogs/:category', to: 'pages#home'

  get '/discover', to: 'pages#home'
  get '/events', to: 'pages#home'

  resources :emails, only: %i[new create]

  namespace :api do
    get 'articles/:category', to: 'articles#index'
    get 'blog/categories', to: 'categories#index'
  end
end
