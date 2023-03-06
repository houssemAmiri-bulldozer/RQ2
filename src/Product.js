import "./styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./stores/slices/cartSlice";

export default function Product({ id, name, price }) {
  const dispatch = useDispatch();

  const addToCartHandler = (e, id) => {
    e.preventDefault();
    dispatch(addToCart(id));
  };

  return (
    <div className="product">
      <h3>
        {name} - ${price}
      </h3>
      <a href="#" onClick={(e) => addToCartHandler(e, id)}>
        Add to cart
      </a>
    </div>
  );
}
