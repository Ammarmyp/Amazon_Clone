import { createBrowserRouter } from "react-router-dom";
import Checkout from "./pages/Checkout";
import App from "./App";

const router = createBrowserRouter([
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/",
      element: <App />,
    },
  ]);

  export default router;