import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router";
import {useState, useEffect} from "react";
import RootLayout from "./components/RootLayout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Works from "./pages/Works.tsx";
import Contact from "./pages/Contact.tsx";
import Loader from "./components/Loader.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {path: "/Home", element: <Home/>},
            {path: "/Home", element: <Home/>},
            {path: "/About", element: <About/>},
            {path: "/Works", element: <Works/>},
            {path: "/Contact", element: <Contact/>},
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