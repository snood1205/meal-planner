# frozen_string_literal: true

class CreateMealRecipes < ActiveRecord::Migration[7.1]
  def change
    create_table :meal_recipes, id: :uuid do |t|
      t.references :meal, null: false, foreign_key: true, type: :uuid
      t.references :recipe, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
