import { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "./stores/slices/cartSlice";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const isCollapsedHandler = (e) => {
    e.preventDefault();
    setIsCollapsed((prev) => !prev);
  };

  const removeProductHandler = (e) => {
    e.preventDefault();
  };

  const resetHandler = (e) => {
    e.preventDefault();
    dispatch(resetCart());
    setIsCollapsed(false);
  };

  return (
    <div className="header">
      <a href="#">Logo</a>
      <div className="cart">
        <a href="#" onClick={isCollapsedHandler}>
          Cart ({products.length})
        </a>
        {isCollapsed && (
          <div className="cart-dropdown">
            <h3>Total: ${total}</h3>
            <ul>
              {products.map((product) => {
                return (
                  <li>
                    <a
                      href="#"
                      onClick={(e) => removeProductHandler(e, product.id)}
                    >
                      [x]
                    </a>{" "}
                    {product.name} - ${product.price}
                  </li>
                );
              })}
            </ul>
            {products.length > 0 && (
              <a href="#" onClick={resetHandler}>
                {" "}
                Reset Cart{" "}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
