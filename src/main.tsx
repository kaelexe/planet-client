import React from "react";
import { ThemeWrapper } from "./components/organisms/ThemeWrapper";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>
);