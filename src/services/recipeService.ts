import { Recipe } from '../types/recipe'

export const fetchAllRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch('http://localhost:8080/recipes')
  return await response.json()
}

export const fetchRecipeById = async (id: number): Promise<Recipe> => {
  const response = await fetch(`http://localhost:8080/recipes/${id}`)
  return await response.json()
}

export const fetchRecipeByCount = async (count: number): Promise<Recipe[]> => {
  const response = await fetch(`http://localhost:8080/recipes/card/${count}`)
  return await response.json()
}

export const addRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const response = await fetch('http://localhost:8080/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  })
  return await response.json()
}
