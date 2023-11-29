# frozen_string_literal: true

class CreateRecipes < ActiveRecord::Migration[7.1]
  def change
    create_table :recipes, id: :uuid do |t|
      t.string :name
      t.string :notes
      t.integer :type_of_dish
      t.integer :prep_time_min
      t.integer :cook_time_min
      t.string :recipe_location

      t.timestamps
    end
  end
end
