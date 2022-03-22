import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { CartProvider } from "./cart-context";
import { LanguageProvider } from "./language-context";
import { ThemeProvider } from "./theme-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
