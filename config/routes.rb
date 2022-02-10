Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/about', to: 'pages#about'
  get '/blogs', to: 'pages#blogs'
  get '/explore', to: 'pages#explore'
end
