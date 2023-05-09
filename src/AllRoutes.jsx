import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Button from './Buttons/Buttons';
import Product from './Product/Product';
const AllRoutes = () => {
    return (
      <Routes>
          <Route path='/*' element={<Button/>}/>
          <Route path='/product' element={<Product/>}/>
      </Routes>
    )
  }
  export default AllRoutes;