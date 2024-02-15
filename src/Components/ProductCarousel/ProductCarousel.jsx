import { useState } from "react";

import ProductImages from "./ProductImages";

import watchImage1 from "../../assets/watches/product-1.webp";
import watchImage2 from "../../assets/watches/product-2.webp";
import watchImage3 from "../../assets/watches/product-3.webp";
import watchImage4 from "../../assets/watches/product-4.webp";

const ProductCarousel = () => {
  const images = [watchImage1, watchImage2, watchImage3, watchImage4];

  const [displayImage, setDisplayImage] = useState(images[0]);

  return (
    <div className="max-w-[50%]">
      {/* displayed image */}
      <img className="rounded-lg" src={displayImage} alt="" />
      <ul className="flex gap-2 mt-2">
        {images.map((image, index) => {
          return (
            <ProductImages
              src={image}
              index={index}
              key={index}
              images={images}
              setDisplayImage={setDisplayImage}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ProductCarousel;
