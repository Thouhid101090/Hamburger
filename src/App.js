import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import Home from './Components/Home/Home';
import Food from './Components/Food/Food';
import About from './Components/About/About';
import Reservation from './Components/Reservation/Reservation';
import Cart from './Components/Cart/Cart';
import Signin from './Components/Admin/Signin/signin';
import Register from './Components/Admin/Register/register';
import Dashboard from './Components/Admin/Dashboard/dashboard';
import Checkout from './Components/Checkout/Checkout';
import Protected from './Components/Protected';
import AdminFood from './Components/Admin/Dashboard/adminMenu';
import Basic from './Components/Cart/NewCart';
import AddProducts from './Components/Admin/Dashboard/addProducts';
import Accouts from './Components/Admin/Dashboard/accouts';




function App() {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Food" element={<Food />} />

            <Route path="/About" element={<About />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/NewCart" element={<Basic />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Accouts />} />


            <Route
              path="/dashboard"
              element={
                <Protected isSignedIn={isSignedIn}>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="/menus"
              element={
                <Protected isSignedIn={isSignedIn}>
                  <AdminFood />
                </Protected>
              }
            />
            <Route
              path="/addProducts"
              element={
                <Protected isSignedIn={isSignedIn}>
                  <AddProducts />
                </Protected>
              }
            />
          </Routes>




        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;


