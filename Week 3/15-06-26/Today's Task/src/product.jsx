import "./Product.css";
import Price from "./Price";
import { useState } from "react";
function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,500", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let Description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intuitive surface", "designed for ipad pro"],
    ["designed for ipad pro", "intuitive surface"],
    ["wireless", "Optical Orientation"],
  ];

  let [liked, setLiked] = useState(false);

  let handleOnclick = () => {
    setLiked(!liked);
  };
  let likeStyles = {
    color: "red",
  };
  return (
    <>
      <div className="Product">
        <span id="like" onClick={handleOnclick} style={likeStyles}>
          {liked ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </span>

        <h4>{title}</h4>
        <p>{Description[idx][0]}</p>
        <p>{Description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
    </>
  );
}

export default Product;
