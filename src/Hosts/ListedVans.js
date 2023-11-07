import React from "react";
import '../server';
import { NavLink } from "react-router-dom";


export default function ListedVans() {
    const [vansDetail, setVansDetail] = React.useState([]);
    React.useEffect(function(){
        fetch(`/api/hosts/listedvans`)
            .then(res => res.json())
            .then(data => setVansDetail(data.vans))
    }, [])

    console.log(vansDetail)
    
    const eachVan = vansDetail.map(function(van){
        return (
            <NavLink to={`/hosts/listedvans/${van.id}`}>
                <div key={van.id} className="each-van">
                <figure>
                    <img src={van.imageUrl}alt="" />

                    <figcaption>
                        <h1>{van.name}</h1>
                        <p>{van.price}/day</p>
                    </figcaption>
                </figure>
            </div>
            </NavLink>
            
        )
    })

    return (
        <>
            <section className="listed-vans">
                <h1 className="h1">Your listed Vans</h1>
                { vansDetail.length > 0 ?
                    <div className="listed-vans-containers">
                     {eachVan}
                </div> : <h2>check your internet mate</h2> }
            </section>
        </>
    )
}
//created a little loading page above