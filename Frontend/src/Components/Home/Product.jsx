import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

function Products() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState({}); // Changed to an object to track per product
  const navigate = useNavigate();

  // Assuming you have a user context or a global state for authentication
  const isLoggedIn =  localStorage.getItem('token') !== null;   // Replace with your authentication logic (e.g., context or state)

  // Fetch products from the API
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

  // Function to change the index for cycling through products
  const nextProducts = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;
      return nextIndex < products.length ? nextIndex : 0;
    });
  };

  // Set an interval to change products every 10 seconds
  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(nextProducts, 10000);
      return () => clearInterval(interval);
    }
  }, [products]);

  // Handle "Buy Now" click
  const handleBuyNow = (product) => {
    if (!isLoggedIn) {
      alert("Please log in first!");
      return;
    }
    setSelectedProduct(product);
    setQuantity(1);
    setIsModalOpen(true);
  };

  // Function to handle closing of modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle quantity change (increase and decrease)
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Handle post request for "Buy Now" and navigate to order page
  const handlePostOrder = async () => {
    try {
      const response = await axiosInstance.post(
        `/order/buy-now?productId=${selectedProduct.id}&quantity=${quantity}`
      );
      navigate(`/order`, { state: { orderDetails: response.data } });
      handleCloseModal();
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  // Handle post request for "Add to Cart"
  const handleAddToCart = async (productId) => {
    if (!isLoggedIn) {
      alert("Please log in first!");
      return;
    }
    try {
      // Send POST request to add product to cart
      await axiosInstance.post(`/cart?productId=${productId.id}`);
      
      // Update the addedToCart state for the specific product
      setAddedToCart((prev) => ({
        ...prev,
        [productId.id]: true,
      }));

      // Hide the "Added to Cart" message after 1 second for the specific product
      setTimeout(() => {
        setAddedToCart((prev) => ({
          ...prev,
          [productId.id]: false,
        }));
      }, 1000);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  // Get the current set of three products to display
  const displayedProducts = products.slice(currentIndex, currentIndex + 3);

  return (
    <section id="products" className="py-12 bg-zinc-100 flex flex-col items-center">
      <h2 className="text-5xl text-start  w-[95%] py-1 m-auto border-b-2 border-black  mb-4 font-poppins text-black">Our Products</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
            <img
              src={product.imageUrl || productageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-center mb-6 font-poppins mt-2">{product.name}</h3>
            <div className="flex justify-between mt-auto">  
              <button
                 className="text-[18px] text-black bg-[#e34b97]  px-2.5 py-1  hover:scale-105 font-poppins "
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>
              <button
            className="text-[18px] text-black bg-[#d15c2d]  px-2.5 py-1  hover:scale-105 font-poppins "
                onClick={() => handleAddToCart(product)} // Use product directly
              >
                Add to Cart
              </button>
            </div>
            {addedToCart[product.id] && <p className="text-center text-green-500 mt-2">Added to Cart</p>}
          </div>
        ))}
      </div>

      {currentIndex + 3 >= products.length && products.length > 0 && (
        <div className="text-center mt-4 text-gray-600">
          <p>Refreshing to the first product set...</p>
        </div>
      )}

      <a className="w-[95%] mt-4" href="/products">
        <button className="text-xl text-black bg-[#e34b97] font-poppins px-3 py-2 w-[180px] sm:w-[230px] ">
          View All Products <i className="ri-arrow-right-line"></i>
        </button>
      </a>

      {/* Modal for "Buy Now" */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold">{selectedProduct.title}</h3>
            <img
              src={`http://192.168.1.11:8080/api/product/${selectedProduct.id}/image`}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover my-4"
            />
            <p>{selectedProduct.description}</p>
            <div className="mt-4 flex items-center">
              <button
                className="px-4 py-2 bg-[#1B5C40] rounded-full text-white"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <span className="mx-4 text-xl">{quantity}</span>
              <button
                className="px-4 py-2 bg-[#1B5C40] rounded-full text-white"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 bg-[#034C2C] text-white rounded-full"
                onClick={handlePostOrder}
              >
                Buy Now
              </button>
              <button
                className="px-4 py-2 bg-[#999] text-white rounded-full"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
