// ./components/Videos.js
import React from 'react';

const videos = [
  {
    id: 1,
    title: "How to Grow Dragonfruit",
    url: "https://www.youtube.com/embed/QBDW2MX1P7U?si=8DkdAa9KgMVicAM-", // Replace with actual YouTube video URL
    description: "Dragon Fruit: Discover the best techniques to successfully grow dragon fruit in your garden, from soil preparation to proper care."
  },
  {
    id: 2,
    title: "Health Benefits of Pineapple",
    url: "https://www.youtube.com/embed/dpxrgbBDJeE?si=uxq9NlAqV_lXn4-V", // Replace with actual YouTube video URL
    description: "Pineapple: Learn how to cultivate sweet and juicy pineapples at home with simple and effective gardening tips."
  },
  {
    id: 3,
    title: "Mangoes Recipes to Try",
    url: "https://www.youtube.com/embed/jh_ukt8g53c?si=NtAfOd3blVHtzo2G", // Replace with actual YouTube video URL
    description: "Mango: Grow delicious mangoes in your backyard with expert guidance on soil, watering, and tree maintenance."
  }
];

function Videos() {
  return (
    <section id='videos' className="py-12 bg-zinc-100 flex flex-col items-center">
        <h2 className="text-5xl text-start mb-4 w-[95%] py-2 m-auto border-b-2 border-black font-poppins text-black">Our Videos</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map(video => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-poppins font-bold p-4">{video.title}</h3>
            <iframe
              className="w-full h-48"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="p-4 text-gray-700">{video.description}</p>
          </div>
        ))}
      </div>

     <a href="/videos">
     <button className='text-xl text-black bg-[#e34b97] px-3 py-2 mt-6 w-[150px] sm:w-[200px] font-poppins'>View More <i class="ri-arrow-right-line"></i> </button>
     </a>

    </section>
  );
}

export default Videos;
