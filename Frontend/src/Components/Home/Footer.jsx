// ./components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'; // Import email icon
import { BiPhone, BiMapPin } from 'react-icons/bi'; // Import phone and location icons

function Footer() {
  return (
    <footer className="bg-zinc-100 text-black  h-fit">
        <div className="moveing-text font-poppins">

   <div class="con">
  <h1>FRESHNESS</h1>
  <div className="gola"></div>
  <h1>QUALITY</h1>
  <div className="gola"></div>
  <h1>NUTRITION</h1>
  <div className="gola"></div>
</div>
       <div class="con">
  <h1>FRESHNESS</h1>
  <div className="gola"></div>
  <h1>QUALITY</h1>
  <div className="gola"></div>
  <h1>NUTRITION</h1>
  <div className="gola"></div>
</div>
       <div class="con">
  <h1>FRESHNESS</h1>
  <div className="gola"></div>
  <h1>QUALITY</h1>
  <div className="gola"></div>
  <h1>NUTRITION</h1>
  <div className="gola"></div>
</div>









        </div>
      <div className="container  mx-auto grid grid-cols-1  md:grid-cols-3">
        {/* Brand Logo and Description */}
        <div className="flex flex-col items-center ">
         <p className="text-[13px] w-[80%] border-2 font-poppins border-black px-4 py-3 rounded-md bg-gray-100 shadow-md">
  <span className="font-semibold text-[#e34b97] ">Founder of DragonBite Brand</span>  
     <br /><br />
  We are a non-profit organization dedicated to supporting farmers at every step. Our mission is to:  
  <ul className="list-disc pl-6 ">
    <li>Provide resources for sustainable farming.</li>
    <li>Support farmers from sowing to selling.</li>
    <li>Ensure fair trade and better market access.</li>
    <li>Promote eco-friendly and organic farming practices.</li>
  </ul>
</p>

        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-5 ">
          <h3 className="text-4xl font-bold font-poppins ">Useful Links</h3>
          <ul className='flex flex-col gap-3'>
            <li><a href="#products" className="text-2xl font-poppins  hover:text-[#e34b97] ">Products</a></li>
            <li><a href="#blogs" className="text-2xl font-poppins  hover:text-[#e34b97] ">Blogs</a></li>
            <li><a href="#videos" className="text-2xl font-poppins  hover:text-[#e34b97] ">Videos</a></li>
            <li><a href="#contact" className="text-2xl font-poppins  hover:text-[#e34b97] ">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className=" info flex flex-col  gap-5">
          <h3 className="text-3xl font-bold font-poppins">Contact Us</h3>
          <p className='text-xl flex items-center'>
            <BiMapPin className="mr-2" /> 
            <a href="https://www.google.com/maps/place/%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%A8+%E0%A4%B8%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B5%E0%A4%B0+%E0%A4%97%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%95(%E0%A4%B2%E0%A4%B9%E0%A4%B8%E0%A5%81%E0%A4%A8)+%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%A8/@23.72621,74.990677,18z/data=!4m6!3m5!1s0x39641fff6d6cd225:0xdfedcdb691406af3!8m2!3d23.725893!4d74.9904029!16s%2Fg%2F11f6l7spk7?hl=hi&shorturl=1" target="_blank" rel="noopener noreferrer" className="hover:underline ">
              Riyawan,Tehsil-Piploda,Dist.Ratlam(M.P)
            </a>
          </p>
          <p className='text-xl flex items-center'>
            <BiPhone className="mr-2" />
            <a href="tel:+11234567890" className=" font-poppins hover:underline">
              +91 89895 93423
            </a>
          </p>
          <p className='text-xl flex items-center'>
            <AiOutlineMail className="mr-2" />
            <a href="mailto:info@rizwansilvergarlic.com" className=" font-poppins hover:underline">
              kapildhakad1@gmail.com
            </a>
          </p>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/kapil.dhakad143?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="p-2 bg-black rounded-full ">
              <FaFacebook className="h-6 w-6 text-[#d15c2d]   hover:text-[#e34b97]" />
            </a>
            <a href="https://www.instagram.com/krishijankar/?igshid=ZDdkNTZiNTM%3D" target="_blank" rel="noopener noreferrer" className="p-2 bg-black rounded-full ">
              <FaInstagram className="h-6 w-6 text-[#d15c2d]   hover:text-[#e34b97]" />
            </a>
            <a href="https://x.com/Kapildhakad8?t=i1XLtkxYxP2-Sd-jJUTa7A&s=09&mx=2" target="_blank" rel="noopener noreferrer" className="p-2 bg-black rounded-full ">
              <FaTwitter className="h-6 w-6 text-[#d15c2d]    hover:text-[#e34b97]" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-black rounded-full ">
              <FaLinkedin className="h-6 w-6  text-[#d15c2d]  hover:text-[#e34b97]" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center font-poppins text-white mt-10 py-4 bg-black">
        <p>&copy; {new Date().getFullYear()} DragonBite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
