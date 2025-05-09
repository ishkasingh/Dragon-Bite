import React, { useState, useEffect } from 'react';
import Navbar from "./Home/Navbar";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "./utils/axiosInstance";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [cartMessage, setCartMessage] = useState({ productId: null, message: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // Fetch user login status (assumed you store the token in localStorage or a context)
  const isUserLoggedIn = localStorage.getItem('token') !== null;  // Example check

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/product");
        const updatedProducts = await Promise.all(
          response.data.map(async (product) => {
            try {
              const imageResponse = await axiosInstance.get(
                `/product/${product.id}/image`,
                { responseType: "blob" }
              );
              const imageUrl = URL.createObjectURL(imageResponse.data);
              return { ...product, imageUrl };
            } catch (imageError) {
              console.error(`Error fetching image for product ${product.id}:`, imageError);
              return { ...product, imageUrl: null };
            }
          })
        );
        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle adding a product to the cart
  const handleAddToCart = async (product) => {
    if (!isUserLoggedIn) {
      alert("Please log in to add products to the cart.");
      return;
    }

    try {
      await axiosInstance.post(`/cart?productId=${product.id}`);
      setCartMessage({ productId: product.id, message: 'Product added to cart!' });
      setTimeout(() => setCartMessage({ productId: null, message: "" }), 1000);
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setCartMessage({ productId: product.id, message: 'Failed to add product to cart.' });
      setTimeout(() => setCartMessage({ productId: null, message: "" }), 3000);
    }
  };

  // Function to open the product details modal
  const handleShowProductDetails = (e, product) => {
    e.stopPropagation(); // Prevent navigation event
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Function to handle quantity change
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  // Function to handle 'Buy Now' action and navigate to order page
  const handleBuyNow = async () => {
    if (!isUserLoggedIn) {
      alert("Please log in to purchase products.");
      return;
    }

    if (selectedProduct) {
      try {
        const response = await axiosInstance.post(`/order/buy-now?productId=${selectedProduct.id}&quantity=${quantity}`);
        navigate(`/order`, { state: { orderDetails: response.data } });
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error creating order:', error);
      }
    }
  };

  // Function to view product details
  const handleViewDetails = (product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl  font-poppins  mx-auto mb-4">All Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              onClick={() => handleViewDetails(product)}
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full rounded h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl  font-poppins font-semibold">{product.name}</h2>
                <p className="text-gray-700 flex items-center font-bold "><MdOutlineCurrencyRupee />{product.price}</p>
                <div className="flex justify-between mt-4 items-center">
                  <button
                      className="text-[18px] text-black bg-[#e34b97]  px-2.5 py-1  hover:scale-105 font-poppins "
                    onClick={(e) => handleShowProductDetails(e, product)}
                  >
                    Buy Now
                  </button>
                  <button
                     className="text-[18px] text-black bg-[#d15c2d] px-2.5 py-1 hover:scale-105 font-poppins "
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the navigate event
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                {cartMessage.productId === product.id && (
                  <p className={`text-sm mt-2 ${cartMessage.message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                    {cartMessage.message}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Product Details */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4 text-center">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <div className="flex items-center mb-4">
              <button className="bg-gray-300 text-black py-2 px-4 rounded-l" onClick={decreaseQuantity}>
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button className="bg-gray-300 text-black py-2 px-4 rounded-r" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#1B5C40] text-white rounded-md hover:bg-blue-600"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
