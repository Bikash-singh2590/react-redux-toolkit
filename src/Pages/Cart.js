import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/slice/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="cartWrapper">
      <h3>Cart</h3>
      {products.map((product) => (
        <div className="cartCard" key={product.id}>
          <img src={product.image} alt="product-iamge" />
          <h5>{product.title}</h5>
          <h5>${product.price}</h5>
          <button className="btn" onClick={() => handleRemove(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
