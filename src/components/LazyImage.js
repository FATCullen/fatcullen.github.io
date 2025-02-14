import { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setTimeout(() => setIsVisible(true), 100);
    };
  }, [src]);

  // Extract sizing classes for the container
  const containerClasses = className?.split(' ')
    .filter(cls => cls.startsWith('w-') || cls.startsWith('h-'))
    .join(' ');

  return (
    <div className={`relative ${containerClasses}`}>
      {/* Placeholder */}
      <div 
        className={`absolute inset-0 bg-gray-800 transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Actual image */}
      <img 
        src={src} 
        alt={alt}
        className={`${className} transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default LazyImage;