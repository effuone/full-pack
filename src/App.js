import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import laptop from './assets/laptop.png'
import smartphone from './assets/smartphone.jpg'
import headphones from './assets/headphone.jpg'

import './styles/App.css'
import About from "./pages/About";
import Header from "./components/common/navbar/Header";
import Categories from "./pages/Categories";
const initialProducts = [
  {id: 1, name: 'Laptop', body: 'Would you like to buy a laptop?', img: laptop},
  {id: 2, name: 'Smartphone', body: 'Would you like to buy a smarphone?', img: smartphone},
  {id: 3, name: 'Headphone', body: 'Would you like to buy a headphone?', img: headphones},
  {id: 4, name: 'Laptop', body: 'Would you like to buy a laptop?', img: laptop},
  {id: 5, name: 'Smartphone', body: 'Would you like to buy a smarphone?', img: smartphone},
  {id: 6, name: 'Headphone', body: 'Would you like to buy a headphone?', img: headphones},
  {id: 7, name: 'Laptop', body: 'Would you like to buy a laptop?', img: laptop},
  {id: 8, name: 'Smartphone', body: 'Would you like to buy a smarphone?', img: smartphone},
  {id: 9, name: 'Headphone', body: 'Would you like to buy a headphone?', img: headphones},
  {id: 10, name: 'Laptop', body: 'Would you like to buy a laptop?', img: laptop},
  {id: 11, name: 'Smartphone', body: 'Would you like to buy a smarphone?', img: smartphone},
  {id: 12, name: 'Headphone', body: 'Would you like to buy a headphone?', img: headphones},
]

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
