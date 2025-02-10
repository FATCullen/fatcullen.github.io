import React, { useState, useEffect, useCallback } from 'react'; // Add useCallback
import travel1 from "../images/example.jpg";
import travel2 from "../images/debacle.png";
import travel3 from "../images/example.jpg";

export default function Other() {
  const travelImages = [travel1, travel2, travel3];
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Wrap nextImage in useCallback
  const nextImage = useCallback(() => {
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev + 1) % travelImages.length);
  }, [travelImages.length]);

  const prevImage = () => {
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev - 1 + travelImages.length) % travelImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextImage]); // Add nextImage to the dependency array

  // Reset transition state after animation completes
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Other</h1>

      <div className="space-y-8">
        {/* Judo */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-6 text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">Judo</h2>
            <p className="text-gray-300 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full md:w-1/5 mt-4 md:mt-0">
            <img src="./example" alt="Me doing Judo" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Chess */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-6 text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">Chess</h2>
            <p className="text-gray-300 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full md:w-1/5 mt-4 md:mt-0">
            <img src="./example" alt="Chess board" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Travel */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-6 text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">Travel</h2>
            <p className="text-gray-300 mb-2">
              Some of the places I've been around the world
            </p>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <div className="relative group overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentImage * 100}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {travelImages.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`Travel ${index + 1}`} 
                    className="w-full h-auto object-cover flex-shrink-0"
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity px-4">
                <button 
                  onClick={prevImage} 
                  className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  disabled={isTransitioning}
                >
                  ←
                </button>
                <button 
                  onClick={nextImage} 
                  className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  disabled={isTransitioning}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}