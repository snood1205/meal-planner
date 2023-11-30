class AddNotNullToName < ActiveRecord::Migration[7.1]
  def change
    change_column_null :recipes, :name, false
    change_column_null :meals, :name, false
  end
end
