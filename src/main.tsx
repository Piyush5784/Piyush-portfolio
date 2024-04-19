import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ShowMenuContextProvider } from "./Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ShowMenuContextProvider>
    <App />
  </ShowMenuContextProvider>
);
