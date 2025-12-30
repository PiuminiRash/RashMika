import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router";
import {useState, useEffect} from "react";
import RootLayout from "./components/rootLayout.tsx";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import Works from "./pages/works.tsx";
import Contact from "./pages/contact.tsx";
import Loader from "./components/loader.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/home", element: <Home/>},
            {path: "/about", element: <About/>},
            {path: "/works", element: <Works/>},
            {path: "/contact", element: <Contact/>},
        ],
    },
]);

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return loading ? <Loader/> : <RouterProvider router={router}/>;
}

export default App;