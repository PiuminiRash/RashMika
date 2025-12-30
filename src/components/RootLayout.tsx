import Navigation from "./navigation.tsx";
import {Outlet} from "react-router";
import Background from "./background.tsx";

function RootLayout(){
    return(
        <>
            <Background/>
            <Navigation/>
            <Outlet></Outlet>
        </>
    )
}

export default RootLayout;
