
import { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/recipe';
import LandingPage from '../components/LandingPage';
import { Link } from 'react-router-dom';
import * as api from '../api/api';

function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]); // set initial state to empty array
    // const searchterm functionality tba

    const fetchRecipes = async () => {
        const data = await api.getRecipeCard(4);
        setRecipes(data);
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div className=''>
            <NavigationBar />
            <LandingPage />
            {/* make card under clickable and lead to the recipepage containing info on the recipe clicked  */}
            
            <div className='text-3xl text-center'>
            <div className='justify-center' id='recipes'>
            <p className='text-white'>What's New!</p>
                <div className='md:bg-prime p-8 mb-12 card-container inline-flex center flex-wrap justify-center  rounded-3xl shadow-2xl'>
               
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
            </div>
        </div>
    );
}

export default Home;