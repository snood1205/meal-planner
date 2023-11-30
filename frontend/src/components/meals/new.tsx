import {FC, useState} from "react";
import {Meal} from "../../models";
import {Recipe} from "../../models/recipe.ts";
import {redirect} from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import {fetchEndpoint} from "../../utilities";

type CreateMeal = Omit<Meal, "id" | "name"> & {
  name?: string;
  recipeAttributes?: Recipe[];
}

export const NewMeal: FC = () => {
  const [errors, setErrors] = useState<Record<string, string[]>>();
  const [name, setName] = useState<string>();
  const [startTime, setStartTime] = useState<Date>();
  const [prepTime, setPrepTime] = useState<number>();
  const [cookingTime, setCookingTime] = useState<number>();
  const [totalCost, setTotalCost] = useState<[number, number]>();
  // const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleClick = () => {
    const meal: CreateMeal = {
      name,
      startTime,
      prepTime,
      cookingTime,
      totalCost,
      // recipes
    };
    fetchEndpoint("/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(meal)
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300)
          redirect("/meals?created=true");
        else
          response.json()
            .then(({errors}) => setErrors(errors));
      });
  };

  return (
    <form>
      <div>
        {errors?.name?.map(error => <div>{error}</div>)}
      </div>
      <input type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)}/>
      <ReactDatePicker selected={startTime} onChange={date => date && setStartTime(date)} />
      <input type="number" placeholder="Prep Time" value={prepTime}
             onChange={event => setPrepTime(Number(event.target.value))}/>
      <input type="number" placeholder="Cooking Time" value={cookingTime}
             onChange={event => setCookingTime(Number(event.target.value))}/>
      <input type="number" placeholder="Total Cost"
             value={`$${totalCost?.[0]}.${totalCost?.[1]?.toString().padStart(2, "0")}`}
             onChange={event => {
               const number = Number(event.target.value);
               const dollars = number / 100;
                const cents = number % 100;
               setTotalCost([dollars, cents]);
             }}/>
      <button onClick={handleClick}>Create Meal</button>
    </form>
  );
};