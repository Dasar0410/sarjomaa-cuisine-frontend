import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Recipe } from '../types/recipe'
import NavigationBar from '../components/NavigationBar'
import TitleInstructionCards from '../components/TitleInstructionCard'
import IngredientsCard from '../components/IngredientsCard'
import { getRecipeById } from '../api/api'
function RecipePages() {
    const {id} = useParams<{ id: string}>() // recipes/:id
    const [recipe, setRecipe] = useState<Recipe | null>(null)

    useEffect(() => {
            const fetchRecipeById = async () => {
                const data = await getRecipeById(Number(id));
                setRecipe(data);
            }
            fetchRecipeById();
        },[id]);

    return (
        <>
        
        <div className=''><NavigationBar/></div>
        <div className='md:mx-10 flex flex-row flex-wrap justify-center'>
        <div className='w-full flex justify-center'>
        {recipe && <img src={recipe.image_url} alt={recipe.title} className='mb-10 md:my-10 md:w-2/4  object-cover'/>}
        </div>
       {recipe && <TitleInstructionCards recipe={recipe} />}
       {recipe && <IngredientsCard recipe={recipe} />}
        

       </div>
        </>
    )
}

export default RecipePages