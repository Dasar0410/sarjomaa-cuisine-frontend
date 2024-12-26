export interface Recipe {
    id: number
    title: string
    description: string
    ingredients: JSON
    steps: JSON
    cuisine: string
    created_at: string
    image_url: string
    creator: number
  }