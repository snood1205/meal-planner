# frozen_string_literal: true

class CreateIngredients < ActiveRecord::Migration[7.1]
  def change
    create_table :ingredients, id: :uuid do |t|
      t.string :name, null: false
      t.boolean :already_owned, null: false, default: false
      t.decimal :quantity
      t.string :quantity_uom
      t.string :store_at_which_to_purchase
      t.integer :estimated_cost_in_cents, default: 0
      t.references :recipe, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end

    add_index :ingredients, :name
    add_index :ingredients, :store_at_which_to_purchase
  end
end
