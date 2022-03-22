import "./styles.css";
import { ProductListing } from "./ProductListing";
import { Cart } from "./Cart";
import { useTheme } from "./theme-context";
import { Nav } from "./Nav";
import { getFontColor } from "./getFontColor";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
    >
      <h1 className="app-header" style={{ color: getFontColor(theme) }}>
        eCommerce
      </h1>
      <div className="app-body">
        <Nav />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
