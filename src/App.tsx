import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipePage from './pages/RecipePages'
import AllRecipes from './pages/AllRecipes'
import AddRecipe from './pages/AddRecipe'

function App() {


  return (
    <div className='scroll-smooth!'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/:id" element={<RecipePage />} />
      <Route path='/recipes' element={<AllRecipes />} />
      <Route path='/add-recipe' element={<AddRecipe />} />
      </Routes>
    </div>
  )
}

export default App
