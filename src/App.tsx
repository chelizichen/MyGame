import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter, NavLink,Routes,Route} from 'react-router-dom'
import { Home } from './component/Home'
import { Play } from './component/Play'
import { Mole } from './component/Mole'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navLink">
          <NavLink to='Home' className={ ({isActive}) =>'defaultStyle'  + (isActive ?' activeStyle':'')} >介绍</NavLink>
          <NavLink to='Play' className={ ({isActive}) =>'defaultStyle'  + (isActive ?' activeStyle':'')} >普通模式</NavLink>
          <NavLink to='Mole' className={ ({isActive}) =>'defaultStyle'  + (isActive ?' activeStyle':'')} >打地鼠</NavLink>
        </div>
        <Routes>
          <Route path="Home/*" element={<Home/>}></Route>
          <Route path="Play/*" element={<Play/>}></Route>
          <Route path="Mole/*" element={<Mole/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
