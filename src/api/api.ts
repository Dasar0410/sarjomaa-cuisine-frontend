// Contains functions for interacting with the recipes table in the database.
// logic related to fetching or filtering recipes to be added here.

import supabase from '../api/supabase'
import { Recipe } from '../types/recipe'

export async function getRecipes(): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')

  if (error) {
    console.error('Error fetching recipes:', error)
    return []
  }
  // Return an empty array if no data is returned
  return (data as Recipe[]) || []
}

// Function to get the newest recipes but only information necessary for the recipe card
export async function getRecipeCard(i: number): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from('recipes')
    .select('title, description, image_url, id, cuisine, created_at')
    .order('created_at', { ascending: false })
    .limit(i)

  if (error) {
    console.error('Error fetching recipes:', error)
    return []
  }
  // Return an empty array if no data is returned
  return (data as Recipe[]) || []
}

export async function getRecipeById(id: number): Promise<Recipe | null> {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching recipe:', error)
    return null
  }
  return data as Recipe
}

export async function addRecipe(recipe: Recipe, imageFile: File) {
  const { data, error: storageError  } = await supabase.storage.from('recipe-images').upload('recipes/' + crypto.randomUUID(), imageFile)
  if (storageError) {
    throw new Error('Error uploading image: ' + storageError.message)
  }

  const imageUrl = supabase.storage.from('recipe-images').getPublicUrl(data.path).data.publicUrl
  recipe.image_url = imageUrl
  console.log('Image uploaded successfully:', imageUrl)

  const { error } = await supabase
    .from('recipes')
    .insert([recipe])

  if (error) {
    throw new Error('Error adding recipe: ' + error.message)
  }
}

export async function updateRecipeDB(recipe: Recipe, id: number) {
  const {error } = await supabase
    .from('recipes')
    .update(recipe) // Update the recipe with the new data 
    .eq('id', id) 
    .select() // Return the updated record

  if (error) {
    console.error('Error updating recipe:', error)
    return null
  }
}

export async function deleteRecipeDB(id: number) {
  const {error} = await supabase
  .from('recipes')
  .delete()
  .eq('id', id )

  if (error){
    console.error('Error deleting recipe: ', error)
  }
}