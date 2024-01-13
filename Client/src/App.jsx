import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import All from './components/All'
import DatabyId from './components/DatabyId'
import Mult2 from "./components/Mult2"
import MultOdd from "./components/MultOdd"
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/all' element={<All></All>}/>
      
      <Route path='/even' element={<Mult2></Mult2>}/>
      <Route path='/odd' element={<MultOdd></MultOdd>}/>
      <Route path='/dataById' element={<DatabyId></DatabyId>}/>
      
    </Routes>
    </>
  )
}

export default App
