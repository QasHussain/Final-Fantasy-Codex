import React, { useState, useEffect } from "react";

import Cloud from "../Application Image Assets/Cloud.png";
import Tifa3 from "../Application Image Assets/Tifa3.png";
import Yuna from "../Application Image Assets/Yuna.png";

function Background2(props) {
  const [image, setImage] = useState();

  const IMAGES = [Cloud, Tifa3, Yuna];

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
        backgroundPosition: "100% 0%",
      }}
    >
      {props.children}
    </div>
  );
}

export default Background2;
