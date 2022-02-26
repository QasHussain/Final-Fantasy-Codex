import React, { useState, useEffect } from "react";

import Aerith from "../Application Image Assets/Aerith.png";
import Barrett from "../Application Image Assets/Barrett.png";
import Tifa2 from "../Application Image Assets/Tifa2.png";

function Background(props) {
  const [image, setImage] = useState();

  const IMAGES = [Aerith, Barrett, Tifa2];

  useEffect(() => {
    const rdnmImage = () => {
      setImage(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
    };

    rdnmImage();
  }, []);

  console.log(image);

  return (
    <div
      className="background__image"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 0%",
      }}
    >
      {props.children}
    </div>
  );
}

export default Background;
