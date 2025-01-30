
import { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/recipe';
import {fetchRecipeByCount } from '../services/recipeService';
import LandingPage from '../components/LandingPage';
import { Link } from 'react-router-dom';

function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]); // set initial state to empty array
    // const searchterm functionality tba

    useEffect(() => {
        const getRecipes = async () => {
            const data = await fetchRecipeByCount(4); // fetch 4 newest recipes // TODO change to variable
            setRecipes(data); 
            console.log(data);
        }
        getRecipes();
    },[]);

    return (
        <div>
            <NavigationBar />
            <LandingPage />
            {/* make card under clickable and lead to the recipepage containing info on the recipe clicked  */}
            <p className=''>What's New!</p>
            <a className='text-3xl text-center'>
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
    );
}

export default Home;