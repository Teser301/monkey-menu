import React from "react";
import "@/styles/gallery.css";
interface GalleryProps {
  images: string[]; // Array of image URLs
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="max-w-4xl gallery-host grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-child rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={image}
              alt={`Showcase Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
