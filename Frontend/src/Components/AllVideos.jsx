import React, { useState } from 'react';
import Navbar from './Home/Navbar';

const AllVideos = () => {
  const videos = [
    { id: 1, title: "How to Grow Garlic", url: "https://www.youtube.com/embed/qygHljE3p3E?si=y-1PUqzMM41WbTsK", description: "Learn the best techniques for growing garlic in your garden." },
    { id: 2, title: "Health Benefits of Garlic", url: "https://www.youtube.com/embed/E1sXxthVO_4?si=bnsn4PLPRvoERSli", description: "Discover the amazing health benefits that garlic offers." },
    { id: 3, title: "Garlic Recipes to Try", url: "https://www.youtube.com/embed/Y_syCWXUanM?si=mRwY39Z7CGxldhHQ", description: "Try these delicious recipes that feature garlic as a main ingredient." },
    { id: 4, title: "Harvesting Garlic", url: "https://www.youtube.com/embed/somevideo4", description: "Tips on how to harvest garlic at the right time." },
    { id: 5, title: "Garlic Storage Tips", url: "https://www.youtube.com/embed/somevideo5", description: "How to store garlic to keep it fresh longer." },
    { id: 6, title: "Garlic Pests and Diseases", url: "https://www.youtube.com/embed/somevideo6", description: "Common pests and diseases affecting garlic and how to manage them." },
    { id: 7, title: "The Garlic Planting Process", url: "https://www.youtube.com/embed/somevideo7", description: "A step-by-step guide to planting garlic." },
    { id: 8, title: "Organic Garlic Farming", url: "https://www.youtube.com/embed/somevideo8", description: "Organic practices for growing garlic sustainably." },
    { id: 9, title: "Garlic Nutritional Value", url: "https://www.youtube.com/embed/somevideo9", description: "Exploring the nutritional benefits of garlic." },
    { id: 10, title: "Garlic for Immune Support", url: "https://www.youtube.com/embed/somevideo10", description: "How garlic can help boost the immune system." },
    { id: 11, title: "Garlic in Culinary Arts", url: "https://www.youtube.com/embed/somevideo11", description: "Using garlic in a variety of culinary dishes." },
    { id: 12, title: "Garlic Medicinal Uses", url: "https://www.youtube.com/embed/somevideo12", description: "Medicinal applications of garlic." },
    { id: 13, title: "Garlic Growing Seasons", url: "https://www.youtube.com/embed/somevideo13", description: "Optimal seasons for growing garlic." },
    { id: 14, title: "Garlic Processing Techniques", url: "https://www.youtube.com/embed/somevideo14", description: "Methods for processing garlic." },
    { id: 15, title: "Advanced Garlic Farming Tips", url: "https://www.youtube.com/embed/somevideo15", description: "Advanced techniques for maximizing garlic yield." }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 3;

  const handleNext = () => {
    if ((currentPage + 1) * videosPerPage < videos.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * videosPerPage;
  const currentVideos = videos.slice(startIndex, startIndex + videosPerPage);

  return (
    <>
      <Navbar />
      <div className="bg-zinc-100 pb-26 py-12 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center mb-8 text-black">All Videos</h1>

        {/* Video Grid */}
        <div className="container mt-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold p-4">{video.title}</h3>
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

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-5  items-center mt-[58px] w-full px-4 md:w-1/2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`px-4 py-2 text-xl font-semibold rounded-lg ${currentPage === 0 ? "bg-gray-300" : "bg-[#034C2C] text-white"}`}
          >
            <i class="ri-arrow-left-line"></i>
            
          </button>
          <span className="text-xl">
            Page {currentPage + 1} of {Math.ceil(videos.length / videosPerPage)}
          </span>
          <button
            onClick={handleNext}
            disabled={(currentPage + 1) * videosPerPage >= videos.length}
            className={`px-4 py-2 text-xl font-semibold rounded-lg ${(currentPage + 1) * videosPerPage >= videos.length ? "bg-gray-300" : "bg-[#034C2C] text-white"}`}
          >
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AllVideos;
