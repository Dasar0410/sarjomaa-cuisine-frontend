import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipePage from './pages/RecipePages'

function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
    </>
  )
}

export default App
