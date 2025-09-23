import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Recipe } from '../types/recipe'
import NavigationBar from '../components/NavigationBar'
import TitleInstructionCards from '../components/TitleInstructionCard'
import IngredientsCard from '../components/IngredientsCard'
import { getRecipeById } from '../api/api'
function RecipePages() {
    const {id} = useParams<{ id: string}>() // recipes/:id
    console.log(id)
    const [recipe, setRecipe] = useState<Recipe | null>(null)

    useEffect(() => {
            const fetchRecipeById = async () => {
                const data = await getRecipeById(Number(id));
                setRecipe(data);
                console.log(data);
            }
            fetchRecipeById();
        },[id]);

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