import React from 'react'
import {Routes,Route} from "react-router-dom"
import App from './App'
import ProductDetals from './ProductDetals'
import CartDetails from './components/CartDetails/CartDetails'
import Login from './components/Login/Login'
import { Payment } from './components/Payment/Payment'

function Main() {
    
  return (
    <div>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/details/:id/" element={<ProductDetals />} />
            <Route path="/cartdetails/" element={<CartDetails />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/payment/" element={<Payment />} />

        </Routes>
    </div>
  )
}

export default Main