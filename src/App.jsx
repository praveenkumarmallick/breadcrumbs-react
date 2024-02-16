import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import BreadCrumbs from "./components/BreadCrumbs";

const App = () => {
  return (
    <>
      <div className="App">
        <h1 style={{textAlign: "center"}}>React BreadCrumbs</h1>
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
