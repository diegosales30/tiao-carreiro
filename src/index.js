import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ItensProvider from "./Providers/itens";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ItensProvider>
      <App />
    </ItensProvider>
  </React.StrictMode>
);
