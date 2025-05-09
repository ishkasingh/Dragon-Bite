import React from 'react'
import Navbar from './Home/Navbar';

const AllBlogs = () => {
const blogs = [
  {
    id: 1,
    title: "Benefits and Uses of Dragonfruit",
    content: "Dragonfruit is a nutrient-rich tropical fruit packed with antioxidants, fiber, and vitamins. It helps boost immunity, improve digestion, and promote healthy skin. Regular consumption can also aid in maintaining a healthy gut.",
    image: "https://i.pinimg.com/736x/c9/8c/7d/c98c7d51d8444b0080fd2ba1b7f1b449.jpg"
  },
  {
    id: 2,
    title: "Health Benefits of Pineapple",
    content: "Pineapple is rich in vitamin C and bromelain, which aid digestion and strengthen the immune system. It also has anti-inflammatory properties and helps in weight management. Drinking fresh pineapple juice can be refreshing and beneficial.",
    image: "https://i.pinimg.com/736x/8f/b6/f8/8fb6f8bb627c0000401dfe209cb1ee7e.jpg"
  },
  {
    id: 3,
    title: "How to Consume Mango?",
    content: "Mango can be enjoyed in various ways—fresh slices, smoothies, salads, or desserts. It is loaded with vitamins A and C, which promote good vision and skin health. Including mangoes in your diet can provide a natural energy boost.",
    image: "https://i.pinimg.com/736x/b2/f1/23/b2f12356e8174432c717726b459855f5.jpg"
  },
  {
    id: 4,
    title: "Strawberry: A Superfood for Skin",
    content: "Strawberries are packed with antioxidants and vitamin C, which help in collagen production and improve skin health. They also support heart health and regulate blood sugar levels. Enjoy them fresh, in smoothies, or as a topping.",
    image: "https://i.pinimg.com/736x/ad/ff/80/adff8029cfd2aec3abae89a1ac13430d.jpg"
  },
  {
    id: 5,
    title: "Kiwi: A Nutrient Powerhouse",
    content: "Kiwi is rich in vitamin C, fiber, and potassium, promoting better digestion and a stronger immune system. It also helps in lowering blood pressure and improving skin texture. Eat it raw or blend it into juices and smoothies.",
    image: "https://i.pinimg.com/736x/1a/c5/aa/1ac5aaf6e46b18097852551f9b9d2f89.jpg"
  },
  {
    id: 6,
    title: "Chikoo: A Natural Energy Booster",
    content: "Chikoo, or sapodilla, is packed with natural sugars, making it a great energy source. It is rich in fiber, aiding digestion and promoting gut health. Its antioxidants also help in reducing stress and improving skin glow.",
    image: "https://i.pinimg.com/474x/d7/8e/c5/d78ec54355744351d3c7692994bea8d8.jpg"
  },
  {
    id: 7,
    title: "Blueberry: The Ultimate Brain Food",
    content: "Blueberries are known for their high antioxidant content, which supports brain health and reduces the risk of cognitive decline. They are also beneficial for heart health and reducing inflammation. Add them to yogurt, cereals, or smoothies.",
    image: "https://i.pinimg.com/736x/90/ec/82/90ec822bdae3d798f3ab4eebfd980fb8.jpg"
  },
  {
    id: 8,
    title: "Watermelon: The Hydration Hero",
    content: "Watermelon is 92% water, making it perfect for staying hydrated. It contains lycopene, which benefits heart health, and vitamins A and C for glowing skin. Enjoy it fresh, in juices, or as a refreshing summer salad.",
    image: "https://i.pinimg.com/736x/41/2b/1d/412b1d58c63e75481987bb06c6074560.jpg"
  }
];



  return (
    <section id="blogs" className=" bg-zinc-100 pb-20">
      <Navbar></Navbar>
      <h2 className="text-5xl font-bold text-center mb-8 mt-8 text-black font-poppins">Our Blogs</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className=" bg-[#e34b97]   p-6 font-poppins rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={blog.image} alt={blog.title} className="w-full text-black h-[320px] object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2 text-black font-poppins">{blog.title}</h3>
            <p className= " text-sm text-black">{blog.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllBlogs
