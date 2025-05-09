// ./components/Hero.js
import React from 'react';
import video from "../../assets/Vedios/Dragonfruit.mp4" 


function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[568px] bg-zinc-100 w-full flex flex-col items-center justify-center text-white">
      
      <div className='absolute left-10 bottom-8 max-w-full  '>
        <h2 className="text-7xl font-poppins ">Welcome <br /> to <br /> DragonBite</h2>   
       <button className='text-xl text-black bg-[#e34b97] px-3 py-2 mt-6 w-[150px] sm:w-[200px] '>
          Contact Us
        </button>
       
      </div>

      <video 
        className='h-full w-full object-cover' 
        muted 
        loop 
        autoPlay 
        src="src/assets/vedios/Dragonfruit.mp4" 
      />
    </section>
  );
}

export default Hero;
