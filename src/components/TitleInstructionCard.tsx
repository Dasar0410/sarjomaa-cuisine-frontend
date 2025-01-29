import { Recipe } from '../types/recipe';


function TitleInstructionCards({ recipe }: { recipe: Recipe }){


return(
<section className="shadow-lg p-8 mx-8 justify-center rounded-2xl bg-white">
    <div className=' leading-loose'>
        <div className='flex flex-col items-center text-center'>
        <h1 className='text-5xl mb-8 mt-8 font-bold capitalize'>{recipe.title}</h1>
        <p className='text-2xl text-gray-800 mb-8'>{recipe.description}</p>    
        </div>
        <h2 className="text-2xl font-semibold mt-8 mb-4 ml-4">Instructions</h2>
        <div className='list-decimal ml-4 space-y-2'>
        {recipe.steps.map((step) => (
            <ul className='list-decimal ml-4'>{step.stepNumber}: {step.instruction}</ul>
        ))}
            </div>
    </div>
</section>
)
}

export default TitleInstructionCards;