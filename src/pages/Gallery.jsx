import React, { useState } from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../assets/images/index";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Gallery = () => {
  const images = [
    {
      id: 2,
      src: image2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].src);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  return (
    <>
      <div className="container">
        <Header />
        <h2 className="text-center text-white mb-4">Image Gallery</h2>

        <div className="row">
          <div className="col-md-6 text-center">
            <img
              loading="lazy"
              src={selectedImage}
              alt="Selected"
              className="img-fluid"
              style={{ maxHeight: "500px", marginBottom: "20px" }}
            />
          </div>
          <div className="col-md-6">
            <div className="row">
              {images.map((image) => (
                <div className="col-4 mb-3" key={image.id}>
                  <img
                    loading="lazy"
                    src={image.src}
                    alt={image.alt}
                    className="img-thumbnail"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(image.src)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
