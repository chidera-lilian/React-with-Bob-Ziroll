import React from "react";
import Header from "./Navigations/Header";
import Footer from "./Navigations/Footer";
import { Outlet } from "react-router-dom";

// This is so that the children in the <Route> opening and closing tag will display on the screen. 
// Rendering the Outlet down below makes the children appear on every single component page. 
// I dont know why I have to do this. Rendering Header.js after the Browser Router opening tag worked just fine. 
// Perhaps beacuse it is not routing or linking anywhwere which can cause some functionality issues. 
// But if thats the case, why not just do this on the header component straight up instead of rendering the header component here. I literally just did this and it works fine. SO why the serenren?
// Why? WHy? Why? React wasn't this tumultous
//I'm just gonna leave it as is and swap back to Layout if there are any problems. 
//Oh yeeeeeeeeeah. I just remembered. We have to do the footer too (I figured this myself)
//oops.
//Dont be angry lol
//Layout is literally how the layout of your page will be. lol
//Outlet is basically saying to render the children with paths.


export default function Layout () {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}