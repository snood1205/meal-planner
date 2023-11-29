# frozen_string_literal: true

class MealRecipe < ApplicationRecord
  belongs_to :meal
  belongs_to :recipe
end
