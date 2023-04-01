import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
