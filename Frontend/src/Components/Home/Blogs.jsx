// ./components/Blogs.js
import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Benefits of Dragon Fruit",
    content:"Dragon fruit is a nutrient-rich superfood packed with vitamins C and B, fiber, and antioxidants. It helps boost immunity, supports digestion, and promotes heart health by lowering bad cholesterol.",
    image: "https://i.pinimg.com/originals/25/02/52/2502528c150480ee3500e7c831098ccc.gif" // Replace with actual garlic image URL
  },
  {
    id: 2,
    title: "Benefits of Pineapple",
    content: "Pineapple is a tropical fruit rich in vitamin C, antioxidants, and bromelain, an enzyme that aids digestion and reduces inflammation.",
    image: "https://i.pinimg.com/originals/67/f7/13/67f7138c7b618efd88c6b3bb6fa4f96e.gif" // Replace with actual garlic image URL
  },
  {
    id: 3,
    title: "Benefits of Mango ",
    content: "Mango is a delicious and nutrient-rich fruit packed with vitamins A, C, and E, along with fiber and antioxidants. It boosts immunity, supports eye health, and promotes glowing skin.",
    image: "https://i.pinimg.com/originals/9b/61/d9/9b61d968c7059d5463fdd4eb04fbc548.gif" // Replace with actual garlic image URL
  }
];

function Blogs() {
  return (
    <section id="blogs" className="py-12 pb-20 bg-zinc-100 ">
       <h2 className="text-5xl text-start  w-[95%] py-3 m-auto border-b-2 border-black mb-5  font-poppins text-black">Our Blogs</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white p-6 rounded-lg  font-poppins shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-[380px] object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2 font-poppins">{blog.title}</h3>
            <p className="text-gray-600 ">{blog.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
