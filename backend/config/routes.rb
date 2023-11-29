# frozen_string_literal: true

Rails.application.routes.draw do
  resources :recipes, except: %i[new edit] do
    resources :ingredients, except: %i[new edit]
  end

  resources :meals, except: %i[new edit]

  get 'up' => 'rails/health#show', as: :rails_health_check
end
