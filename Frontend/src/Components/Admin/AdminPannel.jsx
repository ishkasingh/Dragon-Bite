import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import axios from 'axios';
import ViewProducts from './ViewProducts';
import AddProduct from './AddProduct';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [viewProducts, setViewProducts] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://192.168.1.3:8080/api/product', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (viewProducts) {
      fetchProducts();
    }
  }, [viewProducts]);

  return (
    <div className="p-4">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="grid grid-cols-3 gap-4">
        <div
          className="p-6 bg-gray-100 rounded shadow cursor-pointer hover:bg-gray-200"
          onClick={() => {setShowAddProduct(true);setViewProducts(false)}} // Show the AddProduct popup
        >
          Add Product
        </div>
        <div
          className="p-6 bg-gray-100 rounded shadow cursor-pointer hover:bg-gray-200"
          onClick={() => {setViewProducts(!viewProducts); setShowAddProduct(false);} } // Toggle viewProducts state
        >
          View Products
        </div>
        <div className="p-6 bg-gray-100 rounded shadow">Manage Orders</div>
      </div>

      {/* Conditional rendering for the AddProduct component */}
      {showAddProduct && (
          <AddProduct onClose={() => setShowAddProduct(false)} />
      )}

      {viewProducts && (
        <ViewProducts products={products} />
      )}
    </div>
  );
};

export default AdminPanel;
