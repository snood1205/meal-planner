# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

meal = Meal.create(
  name: 'Thanksgiving',
  start_time: DateTime.new(2024, 11, 28, 15, 0, 0)
)

recipes = [
  Recipe.create(
    name: 'Green Bean Casserole',
    notes: 'Traditional thanksgiving dish',
    type_of_dish: 'Side',
    prep_time_min: 5,
    cook_time_min: 30,
    recipe_location: 'https://www.mccormick.com/frenchs/recipes/salads-sides/frenchs-green-bean-casserole',
    ingredients_attributes: [
      { name: 'Condensed Cream of Mushroom Soup',
        already_owned: false,
        quantity: 1,
        quantity_uom: 'can',
        store_at_which_to_purchase: 'Acme',
        estimated_cost_in_cents: 125 },
      { name: 'Milk',
        already_owned: true,
        quantity: 0.75,
        quantity_uom: 'cup' },
      { name: 'Black Pepper',
        already_owned: true,
        quantity: 0.125,
        quantity_uom: 'tsp' },
      { name: 'Green Beans',
        already_owned: false,
        quantity: 2,
        quantity_uom: 'can',
        store_at_which_to_purchase: 'Acme',
        estimated_cost_in_cents: 300 },
      { name: 'Crispy Fried Onions',
        already_owned: false,
        quantity: 1.333,
        quantity_uom: 'cup',
        store_at_which_to_purchase: 'Acme',
        estimated_cost_in_cents: 250 }
    ]
  ),
  Recipe.create(
    name: 'Deviled Eggs',
    notes: 'Eggs with a kick',
    type_of_dish: "Hors d'œuvre",
    prep_time_min: 20,
    cook_time_min: 15,
    recipe_location: 'https://www.foodnetwork.com/recipes/classic-deviled-eggs-recipe-1911032',
    ingredients_attributes: [
      { name: 'Eggs',
        already_owned: true,
        quantity: 6,
        quantity_uom: 'egg' },
      { name: 'Mayonnaise',
        already_owned: true,
        quantity: 0.25,
        quantity_uom: 'cup' },
      { name: 'White Vinegar',
        already_owned: true,
        quantity: 1,
        quantity_uom: 'tsp' },
      { name: 'Yellow Mustard',
        already_owned: false,
        quantity: 1,
        quantity_uom: 'tsp',
        store_at_which_to_purchase: 'Giant',
        estimated_cost_in_cents: 150 },
      { name: 'Salt',
        already_owned: true,
        quantity: 0.125,
        quantity_uom: 'tsp' },
      { name: 'Black Pepper',
        already_owned: true,
        quantity: 1,
        quantity_uom: 'dash' },
      { name: 'Paprika',
        already_owned: true,
        quantity: 1,
        quantity_uom: 'dash' }
    ]
  )
]

recipes.each do |recipe|
  MealRecipe.create meal:, recipe:
end
