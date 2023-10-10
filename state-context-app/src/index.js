import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ProductProvider } from "./ContextProvider/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
    <App />
    </ProductProvider>
    
  </React.StrictMode>
);
// Above way is the change with react 18
// react strict mode is  doubling rendering (ghost mode )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
