import { IMG_CDN_URL } from "../constant";

const cartItems = ({
  name,
  description,
  category,
  cloudinaryImageId,
  price,
}) => {
  return (
    <div className="p-4 w-80 ">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div className="pt-3 text-lg font-bold">{name}</div>
      {!description ? <h3>{category}</h3> : <h3>{description}</h3>}
      <h4>Rupees - {price / 100}</h4>
    </div>
  );
};

export default cartItems;
