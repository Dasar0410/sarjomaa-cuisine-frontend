import { Recipe } from '../types/recipe'

export const fetchAllRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch('http://localhost:8080/recipes')
  return await response.json()
}