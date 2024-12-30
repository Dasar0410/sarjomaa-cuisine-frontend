import {Recipe} from '../types/recipe'


function IngredientsCard({recipe}: {recipe: Recipe}) {
    return (
        <div className='card mx-8 p-8 shadow-lg'>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default IngredientsCard