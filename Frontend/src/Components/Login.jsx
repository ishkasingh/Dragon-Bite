import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Home/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://192.168.1.6:8080/user/login", {
        email,
        password,
      });

      console.log(response);

      if (response.data) {
        localStorage.setItem("token", response.data);
        // alert("Login successful!");
        navigate("/");
      } else {
        alert("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <>
      <Navbar />
     <div className="w-full h-screen bg-[#e34b97] flex items-center justify-center font-poppins">

  <div className="flex items-center justify-center">
    <div className="w-fit h-fit mb-24 flex flex-col items-center justify-center ">
      <h1 className="text-[50px] font-bold mb-6 text-white leading-snug"><span className="text-[#FEE3AE]  ">Welcome</span> to DragonBite </h1>

     
      <div className=" py-3 px-3  bg-[#FEE3AE] text-[#e34b97] font-semibold rounded-full mb-4 flex justify-center items-center gap-2 shadow-lg cursor-pointer transition-all hover:scale-105">
        <i className="ri-google-fill text-xl"></i>
        <h1 className="text-center">Continue with Google</h1>
      </div>

      <h1 className="mb-4 text-center text-white">or use your email account</h1>

   
      <form onSubmit={handleLogin} className="flex flex-col gap-4 items-center">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 text-xl w-[400px] placeholder:text-gray-700 outline-none rounded-md border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 w-[400px] text-xl placeholder:text-gray-700 outline-none rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

       
        <div className="flex w-[400px] items-center mt-4 justify-between">
          <button
            type="submit"
            className="flex items-center justify-between px-4 py-2 bg-[#FEE3AE] text-[#e34b97] font-semibold rounded-full w-[120px] shadow-md transition-all hover:scale-105 hover:bg-[#ffd992]"
          >
            <h1>Go</h1>
            <i className="ri-login-circle-line text-xl"></i>
          </button>
          <h1 className="text-white px-2 py-2 rounded-md cursor-pointer hover:underline">
            Forgot your password?
          </h1>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;
