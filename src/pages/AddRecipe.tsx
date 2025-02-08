import { FormEvent, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { addRecipe } from '../services/recipeService';
import { Recipe } from '../types/recipe';

function NewRecipe() {
  const [recipe, setRecipe] = useState<Recipe>({
      title: "",
      id: 100,
      created_at: new Date().toISOString(),
      creator: 1,
      description: "",
      ingredients: [],
      steps: [],
      cuisine: "",
      image_url: "",
  });

function handleSubmit(event: FormEvent) {
  event.preventDefault();
  console.log(recipe);
  addRecipe(recipe);
  

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };
  

  return (
    <div>
      <NavigationBar />
      <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={recipe.title} onChange={handleChange} placeholder="Title" required className="border p-2 w-full" />
      <input type="text" name="description" value={recipe.description} onChange={handleChange} placeholder="Description" required className="border p-2 w-full" />
      <input type="text" name="cuisine" value={recipe.cuisine} onChange={handleChange} placeholder="Cuisine" required className="border p-2 w-full" />
      <input type="text" name="image_url" value={recipe.image_url} onChange={handleChange} placeholder="Image URL" required className="border p-2 w-full" />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default NewRecipe;