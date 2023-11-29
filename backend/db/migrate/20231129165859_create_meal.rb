# frozen_string_literal: true

class CreateMeal < ActiveRecord::Migration[7.1]
  def change
    create_table :meals, id: :uuid do |t|
      t.string :name
      t.datetime :start_time

      t.timestamps
    end
  end
end
