import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipePage from './pages/RecipePages'
import AllRecipes from './pages/AllRecipes'

function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/:id" element={<RecipePage />} />
      <Route path='/recipes' element={<AllRecipes />} />
      </Routes>
    </>
  )
}

export default App
