import { useState, useEffect } from "react";
import g1 from "../assets/bolingallery(1).jpg?imagetools&width=800&format=webp";
import g2 from "../assets/bolingallery(2).jpg?imagetools&width=800&format=webp";
import g3 from "../assets/bolingallery(3).jpg?imagetools&width=800&format=webp";
import g4 from "../assets/bolingallery(4).jpg?imagetools&width=800&format=webp";
import g5 from "../assets/bolingallery(5).jpg?imagetools&width=800&format=webp";
import g6 from "../assets/bolingallery(6).jpg?imagetools&width=800&format=webp";
import g7 from "../assets/bolingallery(7).jpg?imagetools&width=800&format=webp";
import g8 from "../assets/bolingallery(8).jpg?imagetools&width=800&format=webp";
import g9 from "../assets/bolingallery(9).jpg?imagetools&width=800&format=webp";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal with the clicked image
  const openModal = (src) => {
    setSelectedImage(src);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Optional: Add an effect to close the modal when the 'Escape' key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((src, i) => (
          <figure
            key={i}
            className="overflow-hidden rounded-xl border bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            onClick={() => openModal(src)} // Add onClick handler here
          >
            <img // Using a standard <img> tag for clarity
              alt={`Gallery image ${i + 1}`}
              src={src}
              loading="lazy" // Lazy-load images
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        ))}
      </div>

      {/* The Modal (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity"
          onClick={closeModal} // Close modal when clicking the background
        >
          <div
            className="relative mx-4 max-w-4xl max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the image from closing the modal
          >
            <img
              alt="Full-screen view"
              src={selectedImage}
                loading="lazy" // Lazy-load images

              className="max-h-[90vh] w-auto object-contain rounded-lg"
            />

            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold shadow-lg"
              aria-label="Close image view"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
