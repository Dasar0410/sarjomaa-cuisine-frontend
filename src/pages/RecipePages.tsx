import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipeById } from '../services/recipeService'
import { Recipe } from '../types/recipe'
import NavigationBar from '../components/NavigationBar'
import TitleInstructionCards from '../components/TitleInstructionCard'
import IngredientsCard from '../components/IngredientsCard'
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
        <>
        
        <div className=''><NavigationBar/></div>
        <div className='allCards mx-10 flex flex-row flex-wrap justify-center'>
        
        {recipe && <img src={recipe.image_url} alt={recipe.title} className='recipePageImage my-10  object-cover'/>}
        {recipe && <IngredientsCard recipe={recipe} />}
       {recipe && <TitleInstructionCards recipe={recipe} />}
        

       </div>
        </>
    )
}

export default RecipePages