import { useState } from 'react'
import './App.css'
import {Routes,Route,useNavigate} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Details from './components/details';
import Modifier from './components/modifier';
import Create from './components/ajout';
import logo from '../public/logo.jpeg'


//rafce raccourci react 
function App() {

  return (
    <Routes>
      <Route path='login' element={ <Login/>}> </Route>
      <Route path='create' element={<Create/>}></Route>
      <Route path='details/:id' element={<Details/>}></Route>
      <Route path='modifier/:id' element={<Modifier/>}></Route>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  )
}

export default App
