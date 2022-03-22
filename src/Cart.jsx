import { useCart } from "./cart-context";
import { getFontColor } from "./getFontColor";
import { useLanguage } from "./language-context";
import { languageLib } from "./languageLib";
import { useTheme } from "./theme-context";

export function Cart() {
  const { items } = useCart();
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <h1
      style={{ color: getFontColor(theme) }}
    >{`${languageLib[language]["cart"]} ${items}`}</h1>
  );
}
