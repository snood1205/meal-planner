# frozen_string_literal: true

class Meal < ApplicationRecord
  has_many :meal_recipes, dependent: :destroy
  has_many :recipes, through: :meal_recipes
  has_many :ingredients, through: :recipes

  validates :name, presence: true


  def total_cost
    ingredients.to_buy.map(&:estimated_cost_in_cents).sum
  end

  def prep_time
    recipes.map(&:prep_time_min).sum
  end

  def cooking_time
    recipes.map(&:cooking_time_min).sum
  end

  def as_json(options = {})
    super(options)
      .merge(totalCost: [total_cost / 100, total_cost % 100], prepTime: prep_time, cookingTime: cooking_time)
  end
end
