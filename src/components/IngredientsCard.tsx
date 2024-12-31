import {Recipe} from '../types/recipe'


function IngredientsCard({recipe}: {recipe: Recipe}) {
    return (
        <div className='card h-fit p-10 mb-8 shadow-lg rounded-xl bg-white'>
            <h3 className='text-2xl font-semibold mb-4'>Ingredients</h3>
            <ul className='space-y-2 capitalize'>
                {recipe.ingredients.map((ingredient, index) => (
                    //<li key={index}>{ingredient.name} - {ingredient.amount} {ingredient.unit}</li> might go back to this
                    <div>
                    <input className='' type="checkbox"  name={ingredient.name} value={ingredient.amount}></input>
                    <label key={index}> {ingredient.name} - {ingredient.amount} <span className='normal-case'>{ingredient.unit}</span></label>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default IngredientsCard