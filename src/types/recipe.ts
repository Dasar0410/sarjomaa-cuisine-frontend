export interface Recipe {
    id: number
    title: string
    description: string
    ingredients: Ingredient[]
    steps: Step[]
    cuisine: string
    created_at: string
    image_url: string
    creator: number
  }

  export interface Step{
    stepNumber: number
    instruction: string
  }

  export interface Ingredient{
    name: string
    unit: string
    quantity: number
    
  }