import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage'
import Home from './pages/Home'
import ScenePage from './pages/ScenePage'
import TileLayerPage from './pages/TileLayerPage'
import WidgetPage from './pages/WidgetPage'
import './index.css'
import GraphicsPage from './pages/GraphicsPage';
import PopupPage from './pages/Popup'
import ExpandPage from './pages/ExpandPage';
import PopupTemplate from './pages/PopupTemplate';
import BlendPage from './pages/BlendPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mapview' element={<MapPage/>} />
        <Route path='/sceneview' element={<ScenePage/>} />
        <Route path='/tilelayer' element={<TileLayerPage />} />
        <Route path='/widgetbmt' element={<WidgetPage />} />
        <Route path='/graphic' element={<GraphicsPage />} />
        <Route path='/popup' element={<PopupPage/>} />
        <Route path='/expand' element={<ExpandPage/>} />
        <Route path='/popuptemplate' element={<PopupTemplate/>} />
        <Route path='/blend' element={<BlendPage/>} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
