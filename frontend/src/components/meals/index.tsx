import {useEffect, useState} from "react";
import {Meal} from "../../models";
import {Link} from "react-router-dom";

const displayCost = (value?: [number, number]) => {
  if (value == null) return '';
  const [dollars, cents] = value
  const centsString = cents.toString().padStart(2, '0');
  return `$${dollars}.${centsString}`;
}

const displayMinutes = (minutes?: number) => {
  if (minutes == null) return '';
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}:${remainingMinutes}`;
}

type FetchedMeal = Omit<Meal, "startTime"> & { startTime?: string };
const fetchedMealToMeal = (meal: FetchedMeal): Meal => meal.startTime != null ? ({
  ...meal,
  startTime: new Date(meal.startTime)
}) : meal as Meal;


export const Meals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/meals')
      .then(response => response.json())
      .then((meals: FetchedMeal[]) => setMeals(meals.map(fetchedMealToMeal)))
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col gap-6">
        <div className="border border-white rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="font-semibold text-lg">Name</div>
            <div className="font-semibold text-lg">Start Time</div>
            <div className="font-semibold text-lg">Prep Time</div>
            <div className="font-semibold text-lg">Cooking Time</div>
            <div className="font-semibold text-lg">Cost</div>
          </div>
        </div>
        {meals.map(meal => (
          <div key={meal.id}
               className="border border-gray-300 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="font-semibold text-lg">
                <Link to={`/meals/${meal.id}`}>{meal.name}</Link>
              </div>
              <div className="text-gray-700">{meal.startTime?.toLocaleString()}</div>
              <div className="text-gray-700">{displayMinutes(meal.prepTime)}</div>
              <div className="text-gray-700">{displayMinutes(meal.cookingTime)}</div>
              <div className="text-gray-700">{displayCost(meal.totalCost)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}