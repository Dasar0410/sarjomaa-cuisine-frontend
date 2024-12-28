
import React, { useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/recipe';
import { fetchAllRecipes } from '../services/recipeService';

function Home() {
    const [recipes, setRecipes] = React.useState<Recipe[]>([]); // set initial state to empty array
    // const searchterm functionality tba

    useEffect(() => {
        const getRecipes = async () => {
            const data = await fetchAllRecipes(); // fetch all recipes
            setRecipes(data); 
            console.log(data);
        }
        getRecipes();
    },[]);

    


    return (
        <div>
            <NavigationBar />
            <h1 className=''>Home</h1>
            <div className='card-container flex flex-wrap'>
            {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} /> 
            ))}
            </div>
        </div>
    );
}

export default Home;