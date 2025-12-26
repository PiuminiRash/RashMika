import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

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
    basename: "/RashMika", // 👈 REQUIRED FOR GITHUB PAGES
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
