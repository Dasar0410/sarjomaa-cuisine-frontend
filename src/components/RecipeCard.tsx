import react from "react";
import { Link } from 'react-router-dom'
import { Recipe } from '../types/recipe'



function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <h3>{recipe.title}</h3>
    </div>
  )}
  export default RecipeCard;
