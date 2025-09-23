import { Recipe } from '../types/recipe';
import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar'
import FilterSearch from '../components/FilterSearch';
import { getRecipes } from '../api/api';

function AllRecipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([]); // set initial state to empty array
    // const searchterm functionality tba

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getRecipes();
            setRecipes(data); 
            console.log(data);
        }
        fetchRecipes();
    },[]);  
    return (
        <div> 
            <NavigationBar />
            <FilterSearch />
                        <a href='recipes/' className='text-3xl text-center'>
            <div className='card-container flex flex-wrap justify-center'>
            {recipes.map((recipe) => (
                <Link 
                key={recipe.id} 
                to={`/recipes/${recipe.id}`} 
                className="block text-center m-4"
                >
                <RecipeCard recipe={recipe} />
                </Link>
            ))}
            </div>
            </a>
        
        </div>
    )
}

export default AllRecipes