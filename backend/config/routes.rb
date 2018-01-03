Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users, only: [:index, :create, :show]
    resources :transactions, only: [:update, :create, :destroy]
    resources :categories, only: [:index]
    resources :proposeds, only: [:update, :create, :destroy]
  end

end
