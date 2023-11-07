import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

//all the links have been added. Time to remove the nav components from the home and about components

/*YOOOOOOO
    Remember how we wanted the navlink of the achor tag that points to the page were on to have a sort of active class and we failed woeafully? We are about to learn it heeeeeereee. 

    To do this, we first have to change the imported Link to NavLink and update the <NavLink> in the returnec JSX.
    Then we add a classname(style property in our case) to the link and then return a function. The function will take a boolean parameter and read the code for the rest.
    N.B => Must use isActive to style active links
    Let's try this out ourselve the the first navlink.
    issues and solutions.
        1) I tried using this:
                style = {function(isActive){
                    return isActive ? style : null
                }}
            This did not work, cause the instuctor said something about the parameter being an object that will be destuctured. I couldnt find a way to destructure it (i.e object destructuring syntax), so used the explicit return (style={({isActive}) => isActive ? style : null}) in the tutorial and it worked.
            I dont know what issue react has with me, i literally destructured the isActive like so {isActive} in the function param but it didnt work the first time. It worked well the second time. Using my implicit function abeg.
            BTW You have to destructure else the styles would apply regardless of what link page you're on.
        2) Adding rgb() color style failed for some reason. lol. I ACTUALL COPIED THE FUCKING SEMI-COLON FROM THE CSS PAGE. IT IS WELL!!!

*/

//This is the first and top nav
export default function Header() {
    //create boolean. Dont do this. Just use isActive else the style will appear on all pages.
    //const isActive = true

    //create styles object
    const style = {
        color: 'rgb(222, 125, 84)',
        textDecoration: "underline",
        fontWeight: "bold"
    }

    return (
        <>
            <header>
                <nav>
                    <h1 className='hover'>
                        <NavLink 
                            to="/"
                            style = {function({isActive}){
                                return isActive ? style : null
                            }}
                        > #VanLife</NavLink>
                    </h1>
                    <ul>
                        <li className='hover'>
                            <NavLink 
                                to="/about"
                                style = {function({isActive}){
                                    return isActive ? style : null
                                }}
                            >About</NavLink>
                        </li>

                        <li className='hover'>
                            <NavLink 
                                to="/hosts"
                                style = {function({isActive}){
                                    return isActive ? style : null
                                }}
                            >Hosts</NavLink>
                        </li>

                        <li className='hover'>
                            <NavLink 
                                to="/vans"
                                style={({isActive}) => isActive ? style : null}
                            >Vans</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}