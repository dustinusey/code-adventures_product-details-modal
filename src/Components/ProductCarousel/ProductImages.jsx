const ProductImages = (props) => {
  return (
    <div className="">
      <img
        onClick={() => {
          props.setDisplayImage(props.images[props.index]);
        }}
        className="cursor-pointer w-[150px] rounded-lg"
        src={props.src}
      />
    </div>
  );
};
export default ProductImages;
