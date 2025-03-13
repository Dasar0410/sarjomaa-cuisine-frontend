import { FormEvent, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { addRecipe } from '../services/recipeService';
import { Recipe, Ingredient,Step } from '../types/recipe';

function NewRecipe() {
  const [recipe, setRecipe] = useState<Recipe>({
      title: "",
      created_at: new Date().toISOString(),
      creator: 1,
      description: "",
      ingredients: [],
      steps: [],
      cuisine: "",
      image_url: "",
  });

  const [currentIngredient, setCurrentIngredient] = useState<Ingredient>({
    name: "",
    unit: "g",
    amount: 0
  });

function handleSubmit(event: FormEvent) {
  event.preventDefault();
  console.log(recipe);
  addRecipe(recipe);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentIngredient(prev => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value
    }));
  };

  const addIngredient = () => {
    if (currentIngredient.name.trim() && currentIngredient.amount > 0) {
      setRecipe(prev => ({
        ...prev,
        ingredients: [...prev.ingredients, currentIngredient]
      }));
      setCurrentIngredient({ name: "", unit: "g", amount: 0 });
    }
  };

  const removeIngredient = (index: number) => {
    setRecipe(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };
  
  return (
    <div>
      <NavigationBar />
      <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={recipe.title} onChange={handleChange} placeholder="Title" required className="border p-2 w-full" />
      <input type="text" name="description" value={recipe.description} onChange={handleChange} placeholder="Description" required className="border p-2 w-full" />
      <select name="cuisine" value={recipe.cuisine} onChange={handleChange} required className="border p-2 min-w-80">
          <option value="">Select Cuisine</option>
          <option value="italian">Italian</option>
          <option value="indian">Indian</option>
          <option value="other">Other</option>
        </select>


{/* Ingredients section */}
<div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Ingredients</h3>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              name="name"
              value={currentIngredient.name}
              onChange={handleIngredientChange}
              placeholder="Ingredient name"
              className="border p-2 flex-1"
            />
            <input
              type="number"
              name="amount"
              value={currentIngredient.amount || ""}
              onChange={handleIngredientChange}
              placeholder="Amount"
              min="0"
              className="border p-2 w-24"
            />
            <select
              name="unit"
              value={currentIngredient.unit}
              onChange={handleIngredientChange}
              className="border p-2"
            >
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="ml">ml</option>
              <option value="L">L</option>
              <option value="tsp">tsp</option>
              <option value="tbsp">tbsp</option>
              <option value="cup">cup</option>
              <option value="pc">pc</option>
            </select>
            <button
              type="button"
              onClick={addIngredient}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add
            </button>



          </div>
          {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>{ingredient.amount} {ingredient.unit} {ingredient.name}</span>
                <button type="button" onClick={() => removeIngredient(index)} className="text-red-500">Remove</button>
              </li>
              ))}
          </div>

{/* Steps section */}
<div className="mb-6">
  <h3 className='text-lg font-medium'>Steps</h3>
  </div>


      <input type="text" name="image_url" value={recipe.image_url} onChange={handleChange} placeholder="Image URL" required className="border p-2 w-full" />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default NewRecipe;