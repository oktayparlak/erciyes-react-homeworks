import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddProduct from "../muiHomework/AddProduct";
import Home from "../muiHomework/Home";
import ProductsGrid from '../muiHomework/ProductsGrid';

function AppViews() {
  return (
    <>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/addproduct">Add Product</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsGrid />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
      </Routes>
    </>
  );
}

export default AppViews;
