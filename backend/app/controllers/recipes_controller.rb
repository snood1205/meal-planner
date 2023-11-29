# frozen_string_literal: true

class RecipesController < ApplicationController
  def index
    render json: Recipe.all
  end

  def show
    recipe = Recipe.includes(:ingredients).find(params[:id])
    render json: recipe.as_json(include: :ingredients)
  end

  def create
    recipe = Recipe.new(recipe_params)
    if recipe.save
      render json: recipe
    else
      render json: recipe.errors, status: :unprocessable_entity
    end
  end

  def update
    recipe = Recipe.includes(:ingredients).find(params[:id])
    if recipe.update(recipe_params)
      render json: recipe_params[:ingredients_attributes].nil? ? recipe : recipe.as_json(include: :ingredients)
    else
      render json: recipe.errors, status: :unprocessable_entity
    end
  end

  def destroy
    recipe = Recipe.find(params[:id])
    if recipe.destroy
      render json: recipe
    else
      render json: recipe.errors, status: :unprocessable_entity
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :notes, :type_of_dish, :prep_time_min, :cook_time_min, :recipe_location,
                                   ingredients_attributes: %i[name already_owned quantity quantity_uom
                                                              store_at_which_to_purchase estimated_cost_in_cents])
  end
end
