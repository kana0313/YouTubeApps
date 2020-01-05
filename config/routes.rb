Rails.application.routes.draw do
  devise_for :users
  root 'kokusitaisakus#index'
  get 'kokusitaisakus' => 'kokusitaisakus#haikei'
  resources :posts
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
