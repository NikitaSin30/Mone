import { RouterProvider } from "react-router-dom";
import { router } from "./shared/routers";

export const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

