import React, { useRef } from "react";
import img1 from "../../assets/carousel/img1.jpg";
import img2 from "../../assets/carousel/img2.jpg";
import img3 from "../../assets/carousel/img3.jpg";
import img4 from "../../assets/carousel/img4.jpg";

const images = [img1, img2, img3, img4];

export default function Carousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4 mb-14">
      <h1 className="text-2xl font-bold text-center text-cyan-600">
        Use Cases
      </h1>
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth px-8"
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`carousel-${index}`}
              className="w-[300px] h-[200px] object-cover rounded-lg shadow shrink-0"
            />
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
