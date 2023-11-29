class RenameCookTimeMinToCookingTimeMinInRecipes < ActiveRecord::Migration[7.1]
  def change
    rename_column :recipes, :cook_time_min, :cooking_time_min
  end
end
