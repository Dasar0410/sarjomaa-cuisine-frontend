import react from "react";
import { Link } from 'react-router-dom'
import { Recipe } from '../types/recipe'



function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="m-4 max-w-xs rounded overflow-hidden shadow-lg">
      <img className="h-64 w-96" src={recipe.image_url} alt={recipe.title}></img>
      <div className="px-6 py-4"> 
        <div className="font-bold text-xl mb-2">{recipe.title}</div>
        <p className="text-gray-700 text-base h-16">{recipe.description}</p>
        <div className="pt-8">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{recipe.cuisine}</span>
        
        </div>
      </div>

    </div>
  )}
  export default RecipeCard;
