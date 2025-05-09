import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from './utils/axiosInstance'; // Assuming axios instance is imported from utils
import { MdOutlineCurrencyRupee } from "react-icons/md";

const OrderPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // Hook to navigate to another page after address change
  const [orderDetails, setOrderDetails] = useState(state?.orderDetails);

  // Check if orderDetails is present and show a loading or error message
  if (!orderDetails) {
    return (
      <div className="text-red-500 text-center mt-20">
        Order details not found.
      </div>
    );
  }

  // Destructure orderDetails for easier reference
  const {
    userName,
    userEmail,
    mobile,
    orderDate,
    status,
    items,
    totalAmount,
    address,
  } = orderDetails;

  // State for managing address change modal visibility and form inputs
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [city, setCity] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [pincode, setPincode] = useState('');

  const handleChangeAddress = async () => {
    const newFullAddress = `${newAddress},${city},${pincode}`;

    try {
  
      const response = await axiosInstance.put(`/order?address=${newFullAddress}`);
      if (response.data) {
        const updatedOrderDetails = { ...orderDetails, address: newFullAddress };
        setOrderDetails(updatedOrderDetails);
        setIsModalOpen(false); 
      }
    } catch (error) {
      console.error('Error updating address:', error);
      alert('Error updating address');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center font-poppins">Order Details</h1>

        {/* User Information Section */}
        <div className="mb-6">
          <h2 className="text-xl  font-poppins font-semibold mb-2">User Information</h2>
          <p className='font-poppins'><strong>Name:</strong> {userName}</p>
          <p className='font-poppins'><strong>Email:</strong> {userEmail}</p>
          <p className='font-poppins'><strong>Mobile:</strong> {mobile}</p>
        </div>

        {/* Products List Section */}
        <div className="mb-6">
          <h2 className="text-xl  font-poppins font-semibold mb-2">Products</h2>
          {items.map((item) => (
            <div key={item.id} className="border-b py-2">
              <p className='font-poppins'><strong>Product:</strong> {item.productName}</p>
              <p className='font-poppins'><strong>Quantity:</strong> {item.quantity}</p>
              <p  className='flex items-center font-poppins'><strong>Price:</strong> <MdOutlineCurrencyRupee />{item.price.toFixed(2)}</p>
              <p  className='flex items-center font-poppins'><strong>Total Price:</strong> <MdOutlineCurrencyRupee />{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Total Amount Section */}
        <div className="mb-6">
          <p className="text-lg  flex items-center font-bold">
            <strong>Total Amount:</strong> <MdOutlineCurrencyRupee />{totalAmount.toFixed(2)}
          </p>
        </div>

        {/* Address Section */}
        <div className="mb-6 font-poppins">
          <p> <strong>Address:</strong> {address}</p>
        </div>

        {/* Action Buttons (optional) */}
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-yellow-400 font-poppins text-black rounded-md hover:bg-yellow-500 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Change Address
          </button>
          <button
            className="px-4 py-2 bg-green-400 text-black rounded-md font-poppins hover:bg-green-500 transition"
            onClick={() => alert('Payment functionality coming soon')}
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      {/* Address Change Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4 text-center">Change Address</h2>

            {/* Form for Address Inputs */}
            <div className="mb-4">
              <label className="block mb-2">City:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Address:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Enter address"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Pincode:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter pincode"
              />
            </div>

            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)} // Close modal
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleChangeAddress} // Send PUT request
              >
                Change Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
