import React from 'react'

//for react to be able to render different pages on an SPA
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

//all the pages you made for the different routes
import CreateBooks from './pages/CreateBooks';
import ShowBooks from './pages/ShowBooks';
import DeleteBooks from './pages/DeleteBooks';
import EditBooks from './pages/EditBooks';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/books/create' element={<CreateBooks/>} /> 
      <Route path='/books/details/:id' element={<ShowBooks/>} /> 
      <Route path='/books/delete/:id' element={<DeleteBooks/>} /> 
      <Route path='/books/edit/:id' element={<EditBooks/>} /> 


    </Routes>
    
    
  )
}

export default App
