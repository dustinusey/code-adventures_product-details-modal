import Infotainer from "./Infotainer/Infotainer";
import ProductCarousel from "./ProductCarousel/ProductCarousel";

const ProductOverview = () => {
  return (
    <div className="max-w-[50%] p-10">
      <ProductCarousel />
      <Infotainer />
    </div>
  );
};
export default ProductOverview;
