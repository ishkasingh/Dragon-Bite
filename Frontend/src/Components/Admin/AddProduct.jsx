// AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onClose }) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    quantity: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    const productDto = {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      category: productData.category,
      quantity: productData.quantity,
    };

    const productDtoBlob = new Blob([JSON.stringify(productDto)], { type: 'application/json' });
    formData.append('productDto', productDtoBlob);

    if (productData.image) {
      formData.append('imageFile', productData.image);
    }

    try {
      const response = await axios.post('http://192.168.1.3:8080/api/admin', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log('Product added successfully:', response.data);
      alert('Product added successfully');
      onClose(); // Close the form after successful addition
    } catch (error) {
      console.error('Error adding product:', error.response ? error.response.data : error.message);
      alert('Error adding product');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow w-96">
      <h3 className="text-xl font-bold mb-4">Add New Product</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="block w-full p-2 mb-2 border rounded"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="block w-full p-2 mb-2 border rounded"
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        className="block w-full p-2 mb-2 border rounded"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        className="block w-full p-2 mb-2 border rounded"
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        className="block w-full p-2 mb-2 border rounded"
        onChange={handleInputChange}
      />
      <input
        type="file"
        className="block w-full p-2 mb-4"
        onChange={handleImageChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default AddProduct;
