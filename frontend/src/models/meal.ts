export interface Meal {
  id: string
  name: string
  startTime?: Date
  cookingTime?: number
  prepTime?: number
  totalCost?: [number, number]
}