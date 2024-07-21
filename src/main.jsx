import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'
import Music from './Music.jsx'
import Setting from './setting.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
        <Route path='/' element={<App />}>
        <Route path='/home' element={<Home/>} />
        <Route path='/playlist' element={<Music/>}/>
        <Route path='/setting' element={<Setting/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>,
)
