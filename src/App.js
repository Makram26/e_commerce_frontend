import './App.css';

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './component/layout/Header/Header.js'
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import WebFont from "webfontloader"
import ProductDetails from './component/Product/ProductDetails.js'
// import Loader from './component/layout/Loader/Loader';

function App() {

  
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route extact path="/" element={<Home/>} />
        <Route extact path="/product/:id" element={<ProductDetails/>} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
