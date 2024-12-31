import {Recipe} from '../types/recipe'


function IngredientsCard({recipe}: {recipe: Recipe}) {
    return (
        <div className='card mx-8 p-8 shadow-lg rounded bg-white'>
            <h3 className='font-semibold'>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name} - {ingredient.amount} {ingredient.unit}</li>
                ))}
            </ul>
        </div>
    )
}

export default IngredientsCard