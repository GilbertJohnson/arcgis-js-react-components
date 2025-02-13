import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage'
import Home from './pages/Home'
import ScenePage from './pages/ScenePage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mapview' element={<MapPage/>} />
        <Route path='/sceneview' element={<ScenePage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
