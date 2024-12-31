import React, { useEffect, useState } from 'react'
import { Recipe } from '../types/recipe';


function TitleInstructionCards({ recipe }: { recipe: Recipe }){


return(
<section className="shadow-lg p-8 mx-8 justify-center">
    <div className='flex flex-col items-center text-center'>
        <h1 className='text-6xl mb-2 font-light'>{recipe.title}</h1>
        <p className='text-2xl'>{recipe.description}</p>
        {recipe.steps.map((step, index) => (
                <ul>{step.stepNumber}: {step.instruction}</ul>
                ))}
    </div>
</section>
)
}

export default TitleInstructionCards;