import React, { useEffect, useState } from 'react';
import Card1 from '../icons/Card1.png';
import Card2 from '../icons/Card2.png';
import Card3 from '../icons/Card3.png';
import './left.css'; 

const images = [
  Card1, Card2, Card3
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="overlay-left" />
      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out space-x-4"
          style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-56 h-56 object-cover"
            />
          ))}
        </div>
      </div>
      <div className="overlay-right" />
    </div>
  );
};

export default Carousel;


