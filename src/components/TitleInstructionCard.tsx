import React, { useEffect, useState } from 'react'
import { Recipe } from '../types/recipe';


function TitleInstructionCards({ recipe }: { recipe: Recipe }){


return(
<section className="shadow-lg p-8 mx-8">
    <div>
        <h1 className='text-6xl mb-2 font-light'>{recipe.title}</h1>
        <p className='text-2xl'>{recipe.description}</p>
    </div>
</section>
)
}

export default TitleInstructionCards;