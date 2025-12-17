import { Recipe } from '../types/recipe'



function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className=" bg-card m-4 max-w-xs rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img className="h-64 w-96 transition-transform duration-300 hover:scale-105 hover:-translate-y-1" src={recipe.image_url} alt={recipe.title}></img>
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
