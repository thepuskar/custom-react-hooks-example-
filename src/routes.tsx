import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import {
  UseToggleDemo,
  UseTimeoutDemo,
  UseGeolocationDemo,
  UseDebounceDemo,
  UseThrottleDemo,
  UseArrayDemo,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/use-toggle",
    element: <UseToggleDemo />,
  },
  {
    path: "/use-timeout",
    element: <UseTimeoutDemo />,
  },
  {
    path: "/use-geolocation",
    element: <UseGeolocationDemo />,
  },
  {
    path: "/use-debounce",
    element: <UseDebounceDemo />,
  },
  {
    path: "/use-throttle",
    element: <UseThrottleDemo />,
  },
  {
    path: "/use-array",
    element: <UseArrayDemo />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
