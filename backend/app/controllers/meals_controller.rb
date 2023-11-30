# frozen_string_literal: true

class MealsController < ApplicationController
  def index
    meals = Meal.all
    render json: meals.as_json
  end

  def show
    meal = Meal.find(params[:id])

    # Serialize the meal
    meal_json = meal.as_json

    # Manually include the recipes with the totalCost
    meal_json[:recipes] = meal.recipes.map do |recipe|
      recipe.as_json.merge(totalCost: recipe.total_cost_as_array)
    end

    render json: meal_json
  end

  def create
    meal = Meal.new(name: params[:name])
    if meal.save
      render json: meal
    else
      render json: meal.errors, status: :unprocessable_entity
    end
  end
end
