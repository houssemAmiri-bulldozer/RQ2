import "./styles.css";
import Product from "./Product";
import products from "./products";

export default function ProductList() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
