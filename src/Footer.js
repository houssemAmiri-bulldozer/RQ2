import "./styles.css";
import { useSelector } from "react-redux";
export default function Footer() {
  const gifts = useSelector((state) => state.cart.gifts);
  console.log("footer rendered");
  return <div className="footer">{gifts.length}</div>;
}
