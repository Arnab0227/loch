import React, { useEffect, useState, useRef } from 'react';
import Comment1 from '../icons/comments1.png'
import Comment2 from '../icons/comments2.png'
import Comment3 from '../icons/comments3.png'

const images = [Comment1, Comment2, Comment3];

const Carousel2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragStart, setDragStart] = useState(0);
    const [dragging, setDragging] = useState(false);
    const carouselRef = useRef(null);
  
    useEffect(() => {
      const handleDragStart = (e) => {
        setDragStart(e.clientX);
        setDragging(true);
      };
  
      const handleDragEnd = () => {
        setDragging(false);
      };
  
      const handleDragMove = (e) => {
        if (dragging) {
          const dragDelta = e.clientX - dragStart;
          const itemsToShow = images.length;
          const distanceToMove = (dragDelta / carouselRef.current.clientWidth) * itemsToShow;
      
          setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex - Math.round(distanceToMove);
            
            if (newIndex < 0) {
              newIndex = 0;
            } else if (newIndex >= itemsToShow - 1) {
              newIndex = itemsToShow - 1;
            }
      
            return newIndex;
          });
        }
      };
  
      const currentRef = carouselRef.current;
      currentRef.addEventListener('mousedown', handleDragStart);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('mousemove', handleDragMove);
  
      return () => {
        currentRef.removeEventListener('mousedown', handleDragStart);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('mousemove', handleDragMove);
      };
    }, [dragging, dragStart]);
  
    const handleClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    return (
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out space-x-4"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          ref={carouselRef}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-36 object-cover"
            />
          ))}
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onClick={handleClick}
        />
      </div>
    );
};

export default Carousel2;
