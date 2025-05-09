// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './Components/AllProducts';
import AllBlogs from './Components/AllBlogs';
import AllVideos from './Components/AllVideos';
import Login from './Components/Login';
import Home from "./Components/Home/Home"
import About from './Components/About';
import ProductDetails from './Components/ProductDetails';
import PlaceOrder from './Components/PlaceOrder';
import Cart from './Components/Cart';
import OrderPage from './Components/OrderPage';
import AdminPannel from './Components/Admin/AdminPannel';
import ViewProducts from './Components/Admin/ViewProducts';
import AddProduct from './Components/Admin/AddProduct';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/blogs" element={<AllBlogs />} />
      <Route path="/videos" element={<AllVideos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/place-order/:id" element={<PlaceOrder />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/order" element={<OrderPage/>} />
      <Route path="/admin" element={<AdminPannel/>} />
      <Route path="/admin/viewProducts" element={<ViewProducts/>} />
      <Route path="/admin/addProduct" element={<AddProduct/>} />




    </Routes>
  );
}

export default App;
