export interface Recipe {
  id: number
  name: string
  notes: string
  typeOfDish: string
  prepTimeMin?: number
  cookingTimeMin?: number
  recipeLocation?: string
  totalCost?: [number, number]
}