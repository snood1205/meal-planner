# frozen_string_literal: true

class Recipe < ApplicationRecord
  has_many :meal_recipes, dependent: :destroy
  has_many :meals, through: :meal_recipes

  has_many :ingredients, dependent: :destroy
  accepts_nested_attributes_for :ingredients

  enum :type_of_dish, ["Hors d'œuvre", 'Appetizer', 'Side', 'Entree', 'Dessert']

  def total_cost
    ingredients.to_buy.map(&:estimated_cost_in_cents).sum
  end

  def total_cost_as_array
    cost = total_cost
    [cost / 100, cost % 100]
  end

  def as_json(options = {})
    super(options).merge(totalCost: [total_cost / 100, total_cost % 100])
  end
end
