
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
            
            <a className='text-3xl text-center'>
            <div className='justify-center'>
            <p className='text-accentColor '>What's New!</p>
                <div className='bg-prime p-8 card-container inline-flex center flex-wrap justify-center  rounded-3xl shadow-2xl' >
               
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
            </div>
            </a>
        </div>
    );
}

export default Home;