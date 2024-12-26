import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import RecipePage from './pages/recipePages'

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
