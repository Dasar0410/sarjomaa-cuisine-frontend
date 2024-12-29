import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipeById } from '../services/recipeService'
import { Recipe } from '../types/recipe'
function RecipePages() {
    const {id} = useParams<{ id: string}>() // recipes/:id
    console.log(id)
    const [recipe, setRecipe] = useState<Recipe | null>(null)

    useEffect(() => {
            const getRecipe = async () => {
                const data = await fetchRecipeById(Number(id)); // fetch all recipes
                setRecipe(data);
                console.log(data);
            }
            getRecipe();
        },[]);

    


    return (
        <div>
        <h1 className="">RecipePages</h1>
        </div>
    )
}

export default RecipePages