import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/rootLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Works from "./pages/works";
import Contact from "./pages/contact";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "works", element: <Works /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ],
  {
    basename: "/RashMika", // 🔴 REQUIRED
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
