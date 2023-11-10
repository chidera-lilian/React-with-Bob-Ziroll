import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';
import '../server';
import { Outlet } from "react-router-dom";

/*
using fetch(/api/hosts/listedvans/${params.idclicked}`) did not render the page, i dont why.
so, i used fetch(`/api/vans/${params.idclicked}`) instead
*/

export default function Eachlvd() {
const [EachVan, setEachVan] = React.useState()
const params = useParams()
    console.log(params.idclicked)

    React.useEffect(function(){
        fetch(`/api/vans/${params.idclicked}`)
            .then(res => res.json())
            .then(data => setEachVan(data.vans))
    }, [params.id]) 
    console.log(EachVan)

    const style = {
        color: 'rgb(222, 125, 84)',
        textDecoration: "underline",
        fontWeight: "bold"
    }

    return (
       <>
            <section className="eachlvd">
                <NavLink to='/hosts/ListedVans' className='navlink'>&larr; Back to all vans</NavLink>

                { EachVan ? <div className="eachlvd-container">
                    <div className="container">
                        <figure>
                            <img src= {EachVan.imageUrl} alt="nope" />

                            <figcaption>
                                <button>{EachVan.type}</button>
                                <h1>{EachVan.name}</h1>
                                <p>{EachVan.price}/day</p>
                            </figcaption>
                        </figure>

                        <div className="more-links">
                            <NavLink 
                                to='.' 
                                end
                                style = {function({isActive}){
                                return isActive ? style : null
                            }}
                            >Details</NavLink>

                            <NavLink 
                                to='price'
                                style = {function({isActive}){
                                return isActive ? style : null
                            }}
                            >Pricing</NavLink>

                            <NavLink 
                            to='photo'
                            style = {function({isActive}){
                                return isActive ? style : null
                            }}
                            >Photos</NavLink>
                        </div>
                    </div>
                    {/* instead of props, we use useoutletcontext. The content in the context curly braces is destructured. And we passed it the value of our each van state. That way, we can have access to the */}
                    {/* <Outlet
                        name = {EachVan.name}
                        category = {EachVan.type}
                        description = {EachVan.description}
                        img = {EachVan.imageUrl}
                        price = {EachVan.price}
                    /> */}

                    

                    <div className="container2">
                        <Outlet context={{EachVan}}/>
                    </div>

                    {/* <div className="container2">
                        <h1><strong>Name:</strong>{EachVan.name}</h1>

                        <h3><strong>Category:</strong>{EachVan.type}</h3>

                        <p className="describe"><strong>Description:</strong> {EachVan.description}</p>

                        <p><strong>Visibility:</strong> Public</p>
                    </div> */}
                    
                </div> : <h2>loadingggggggg</h2> }
            </section>
       </>
    )
}