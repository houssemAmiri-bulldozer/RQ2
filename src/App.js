import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <ProductList />
        <Footer />
      </div>
    </Provider>
  );
}
