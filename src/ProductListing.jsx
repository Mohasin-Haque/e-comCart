import { useCart } from "./cart-context";
import { getFontColor } from "./getFontColor";
import { useLanguage } from "./language-context";
import { useTheme } from "./theme-context";
import { languageLib } from "./languageLib";
export function ProductListing() {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  const { language } = useLanguage();
  return ["1", "2", "3", "4"].map((item) => (
    <div key={item}>
      <h2 key={item} style={{ color: getFontColor(theme) }}>
        Product {item}
      </h2>
      <button
        onClick={addToCart}
      >{`${languageLib[language]["addToCartButtonText"]}`}</button>
    </div>
  ));
}
