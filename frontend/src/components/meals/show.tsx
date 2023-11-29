import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Meal} from "../../models";
import {Recipe} from "../../models/recipe.ts";
import {Location} from "./location.tsx";

type MealWithRecipes = Meal & { recipes: Recipe[] };

const displayCost = (value?: [number, number]) => {
  if (value == null) return '';
  const [dollars, cents] = value
  const centsString = cents.toString().padStart(2, '0');
  return `$${dollars}.${centsString}`;
}

export const MealShow: FC = () => {
  const {mealId} = useParams<{ mealId: string }>()
  const [meal, setMeal] = useState<MealWithRecipes>();

  useEffect(() => {
    fetch(`http://localhost:3000/meals/${mealId}`)
      .then(response => response.json())
      .then((meal: MealWithRecipes) => setMeal(meal))
  }, [mealId])

  if (meal == null) return <div>Loading...</div>
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col gap-6">
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow">
          <h1 className="font-semibold text-2xl mb-4">{meal.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <div>{meal.startTime ? `Start Time: ${new Date(meal.startTime).toLocaleString()}` : ""}</div>
            <div>Prep Time: {meal.prepTime} mins</div>
            <div>Cooking Time: {meal.cookingTime} mins</div>
            <div>Cost: {displayCost(meal.totalCost)}</div>
          </div>
          <div className="font-semibold text-xl mb-4">Recipes</div>
          {meal.recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white border border-gray-300 rounded-lg p-6 shadow mb-4">
              <div className="flex flex-wrap md:flex-nowrap justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="font-semibold text-lg">{recipe.name}</h3>
                  <p>Notes: {recipe.notes}</p>
                  <p>Type of dish: {recipe.typeOfDish}</p>
                  <Location location={recipe.recipeLocation}>{recipe.recipeLocation}</Location>
                </div>
                <div className="w-full md:w-auto md:flex-1">
                  <p>Prep Time: {recipe.prepTimeMin ? `${recipe.prepTimeMin} mins` : 'N/A'}</p>
                  <p>Cooking Time: {recipe.cookingTimeMin ? `${recipe.cookingTimeMin} mins` : 'N/A'}</p>
                  <p>Cost: {recipe.totalCost ? displayCost(recipe.totalCost) : 'N/A'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}