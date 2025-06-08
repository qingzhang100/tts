import React from "react";
import img1 from "../../assets/carousel/img1.jpg";
import img2 from "../../assets/carousel/img2.jpg";
import img3 from "../../assets/carousel/img3.jpg";
import img4 from "../../assets/carousel/img4.jpg";
const images = [img1, img2, img3, img4];

export default function Carousel() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-max animate-scroll space-x-4">
        {images.concat(images).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`carousel-${index}`}
            className="w-[300px] h-[200px] object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
}
