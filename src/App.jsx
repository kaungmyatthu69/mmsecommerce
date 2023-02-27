import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Cart from './pages/Cart'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Success from './pages/Success'
import "animate.css";
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/detail/:id' element={<ProductDetail/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    
    </div>
  )
}

export default App