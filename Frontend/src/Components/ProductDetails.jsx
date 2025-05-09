import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Components/Home/Navbar";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import axiosInstance from './utils/axiosInstance';
import { MdOutlineCurrencyRupee } from "react-icons/md";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState({ productId: null, message: '' });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axiosInstance.get(`/product/${id}`);
        const productData = response.data;

        const imageResponse = await axiosInstance.get(`/product/${productData.id}/image`, { responseType: 'blob' });
        const imageUrl = URL.createObjectURL(imageResponse.data);

        setProduct({ ...productData, imageUrl });
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setRelatedProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchProductDetails();
    fetchRelatedProducts();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await axiosInstance.post(`/cart?productId=${product.id}&quantity=${quantity}`);
      setCartMessage({ productId: product.id, message: 'Product added to cart!' });
      setTimeout(() => setCartMessage({ productId: null, message: '' }), 1000);
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setCartMessage({ productId: product.id, message: 'Failed to add product to cart.' });
      setTimeout(() => setCartMessage({ productId: null, message: '' }), 3000);
    }
  };

  const handleBuyNow = async () => {
    try {
      const response = await axiosInstance.post(`/order/buy-now?productId=${product.id}&quantity=${quantity}`);
      navigate(`/order`, { state: { orderDetails: response.data } });
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="container mt-20 mx-auto py-6 px-4 md:px-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Product Image */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Column: Product Details */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold font-poppins mb-2">{product.name}</h1>
              <p className="text-gray-600  font-poppins text-sm mb-3">{product.description}</p>
              <p className="text-xl font-poppins mb-4 flex font-bold items-center"><MdOutlineCurrencyRupee />{product.price}</p>
              <p className="text-gray-700 font-poppins">Stock Available: {product.quantity}</p>
            </div>
               {cartMessage.message && (
                <p className="mb-4 text-center mt-2 text-[#e34b97] text-xl font-poppins font-bold ">
                  {cartMessage.message}
                </p>
              )}
            <div className="mt-6">
              <div className="flex items-center space-x-3">
                <button
                  className="text-[18px] text-black bg-[#e34b97] px-2.5 py-1  hover:scale-105 font-poppins"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button
                  className="text-[18px] text-black bg-[#d15c2d] px-2.5 py-1  hover:scale-105  font-poppins "
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
              
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ProductDetails;
