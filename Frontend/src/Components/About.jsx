import React from 'react';
import { BiPhone, BiMapPin } from 'react-icons/bi';
import { AiOutlineMail, AiFillYoutube, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import Navbar from './Home/Navbar';

const About = () => {
  return (
    <div className="bg-[#F4F4F9] text-[#034C2C] min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-5 py-16">
        {/* Company Details */}
        <section className="flex flex-col items-center mb-12 text-center  bg-[#e34b97] opacity-90 text-black rounded-lg p-8 shadow-md">
    
          <h1 className="text-3xl font-poppins font-semibold">About DragonBite</h1>
          <p className="text-lg font-poppins mt-4 max-w-3xl">
            DragonBite is dedicated to supporting farmers at every step of the agricultural journey, from sowing to selling. As a non-profit organization, we aim to enhance the quality of produce and provide a stable market for farmers. Our mission is to empower farmers with resources and support, ensuring they achieve the best possible outcome for their hard work.
          </p>
        </section>

        {/* Contact Information */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Address Section */}
          <div className="flex flex-col items-center text-center  bg-[#e34b97]  p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 font-poppins text-black">Our Location</h2>
            <p className="text-lg flex font-poppins items-center">
              <BiMapPin className="mr-2  text-black" />
              <a 
                href="https://www.google.com/maps/place/%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%A8+%E0%A4%B8%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B5%E0%A4%B0+%E0%A4%97%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%95(%E0%A4%B2%E0%A4%B9%E0%A4%B8%E0%A5%81%E0%A4%A8)+%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%A8/@23.72621,74.990677,18z/data=!4m6!3m5!1s0x39641fff6d6cd225:0xdfedcdb691406af3!8m2!3d23.725893!4d74.9904029!16s%2Fg%2F11f6l7spk7?hl=hi&shorturl=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline font-poppins text-black"
              >
                Riyawan, Tehsil-Piploda, Dist. Ratlam (M.P)
              </a>
            </p>
          </div>

          {/* Contact Details Section */}
          <div className="flex flex-col items-center text-center bg-[#e34b97]  p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 font-poppins text-black">Contact Us</h2>
            <p className="text-lg flex items-center">
              <BiPhone className="mr-2 text-black" />
              <a href="tel:+919898593423" className="hover:underline font-poppins text-black">+91 89895 93423</a>
            </p>
            <p className="text-lg flex items-center mt-4">
              <AiOutlineMail className="mr-2 text-black" />
              <a href="mailto:kapildhakad1@gmail.com" className="hover:underline font-poppins text-black">kapildhakad1@gmail.com</a>
            </p>

          
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
