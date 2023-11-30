# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2023_11_30_003502) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "ingredients", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.boolean "already_owned", default: false, null: false
    t.decimal "quantity"
    t.string "quantity_uom"
    t.string "store_at_which_to_purchase"
    t.integer "estimated_cost_in_cents", default: 0
    t.uuid "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_ingredients_on_name"
    t.index ["recipe_id"], name: "index_ingredients_on_recipe_id"
    t.index ["store_at_which_to_purchase"], name: "index_ingredients_on_store_at_which_to_purchase"
  end

  create_table "meal_recipes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "meal_id", null: false
    t.uuid "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["meal_id"], name: "index_meal_recipes_on_meal_id"
    t.index ["recipe_id"], name: "index_meal_recipes_on_recipe_id"
  end

  create_table "meals", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.datetime "start_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recipes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "notes"
    t.integer "type_of_dish"
    t.integer "prep_time_min"
    t.integer "cooking_time_min"
    t.string "recipe_location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "ingredients", "recipes"
  add_foreign_key "meal_recipes", "meals"
  add_foreign_key "meal_recipes", "recipes"
end
