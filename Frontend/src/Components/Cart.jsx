import React, { useEffect, useState } from "react";
import axiosInstance from "./utils/axiosInstance";
import Navbar from "./Home/Navbar";
import { useNavigate } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/cart");

      // Correctly map over items and fetch images
      const updatedCartItems = await Promise.all(
        response.data.items.map(async (item) => {
          try {
            const imageResponse = await axiosInstance.get(
              `/product/${item.productId}/image`,
              { responseType: "blob" }
            );
            const imageUrl = URL.createObjectURL(imageResponse.data);
            return { ...item, imageUrl };
          } catch (imageError) {
            console.error(`Error fetching image for product ${item.productId}:`, imageError);
            return { ...item, imageUrl: null };
          }
        })
      );

      setCart({ ...response.data, items: updatedCartItems });
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleIncrease = async (itemId) => {
    try {
      const item = cart.items.find((item) => item.productId === itemId);
      if (item) {
        const newQuantity = item.quantity + 1;
        const url = `/cart?productId=${itemId}&quantity=${newQuantity}`;
        await axiosInstance.put(url);
        await fetchCart();
      }
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const handleDecrease = async (itemId) => {
    try {
      const item = cart.items.find((item) => item.productId === itemId);
      if (item) {
        const newQuantity = Math.max(item.quantity - 1, 1); // Ensure quantity doesn't go below 1
        const url = `/cart?productId=${itemId}&quantity=${newQuantity}`;
        await axiosInstance.put(url);
        await fetchCart();
      }
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  const handleRemove = async (itemId) => {
    try {
      const url = `/cart?productId=${itemId}`;
      await axiosInstance.delete(url);
      await fetchCart();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await axiosInstance.post("/order");
      if (response.data) {
        navigate("/order", { state: { orderDetails: response.data } });
      }
    } catch (error) {
      console.error("Error placing the order:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <div className="font-poppins">Loading...</div>;
  if (!cart) return <div className="font-poppins">Cart is empty.</div>;

  const totalPrice = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
    <Navbar />
    <div className="container flex flex-col items-center gap-17">

      <div className="w-[80%]">
      <h2 className="text-2xl font-bold font-poppins mb-6 mt-14 p-6">Your Cart</h2>

      {cart.items.map((item) => (
        <div
          key={item.productId}
          className="flex flex-col bg-[#FDF9E] sm:flex-row items-center mb-6 p-4 bg-white rounded-lg shadow-md space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <img
            src={item.imageUrl || "default-image-url.jpg"} // Provide a default image if imageUrl is null
            alt={item.productName}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-semibold text-lg">{item.productName}</h3>
            <p className="text-gray-600 flex items-center">Price: <MdOutlineCurrencyRupee />{item.price}</p>
            <p className="text-gray-600 flex items-center">Total: <MdOutlineCurrencyRupee />{(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleDecrease(item.productId)}
              className="px-4 py-2 bg-gray-300 rounded-full"
            >
              -
            </button>
            <span className="text-lg font-medium">Quantity: {item.quantity}</span>
            <button
              onClick={() => handleIncrease(item.productId)}
              className="px-4 py-2 bg-gray-300 rounded-full"
            >
              +
            </button>
          </div>
          <button
            onClick={() => handleRemove(item.productId)}
            className="text-red-500 font-semibold"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 p-6 bg-[#cca99b] flex flex-col rounded-lg shadow-md">
        <h3 className="font-bold m text-xl  flex items-center  font-poppins text-center sm:text-center">Total:<MdOutlineCurrencyRupee />{totalPrice.toFixed(2)}</h3>
        <button
          onClick={handlePlaceOrder}
          className="w-[50%]  mt-4 font-poppins bg-[#e34b97]  text-black py-3 rounded-lg font-semibold"
        >
          Place Order
        </button>
      </div>
      </div>


    </div>
    </>
  );
};

export default Cart;
