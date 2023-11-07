import React from "react";
import {Outlet } from "react-router-dom";
import { BrowserRouter, NavLink } from "react-router-dom";

//I'm tired of creating different page components
// lets use styles from index.scss page for this baddie
// end is used in dashboard because it serves as the homepage for the host component.
//I would just change HostLayout to Host to avoid confusions.

function HostHeader(){
    return (
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li className='hover'>
                            <NavLink 
                                to="."
                                end
                                className={function({isActive}) {
                                    return isActive ? "link-active" : ""
                                }}
                                >Dashboard</NavLink>
                        </li>

                        <li className='hover'>
                            <NavLink 
                                to="income"
                                className={function({isActive}) {
                                    return isActive ? "link-active" : ""
                                }}
                            >Income</NavLink>
                        </li>

                        <li className='hover'>
                            <NavLink 
                                to="listedvans"
                                className={function({isActive}) {
                                    return isActive ? "link-active" : ""
                                }}
                            >Vans</NavLink>
                        </li>

                        <li className='hover'>
                            <NavLink 
                                to="reviews"
                                className={function({isActive}) {
                                    return isActive ? "link-active" : ""
                                }}
                            >Reviews</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}


//layout
export default function Host() {
    return (
        <>
            <HostHeader/>
            <Outlet></Outlet>
        </>
    )
}