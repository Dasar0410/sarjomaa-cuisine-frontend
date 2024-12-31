import {Recipe} from '../types/recipe'


function IngredientsCard({recipe}: {recipe: Recipe}) {
    return (
        <div className='card mx-8 p-8 shadow-lg'>
            <h3 className='font-semibold'>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name} - {ingredient.quantity} {ingredient.unit}</li>
                ))}
            </ul>
        </div>
    )
}

export default IngredientsCard