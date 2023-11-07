import React from "react";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

/* Using props did not work because this is not a react component being rendered. Solution is to import useouletcontext and use it */

export default function VanInfo () {
    const { EachVan } = useOutletContext()
    

    return (
        // <h4>welp</h4>
        <div className="container2">
            <h1><strong>Name:</strong>{EachVan.name}</h1>

            <h3><strong>Category:</strong>{EachVan.type}</h3>

            <p className="describe"><strong>Description:</strong> {EachVan.description}</p>

            <p><strong>Visibility:</strong> Public</p>
        </div>
        // <div className="container2">
        //     <h1><strong>Name:</strong>{EachVan.name}</h1>

        //     <h3><strong>Category:</strong>{EachVan.type}</h3>

        //     <p className="describe"><strong>Description:</strong> {EachVan.description}</p>

        //     <p><strong>Visibility:</strong> Public</p>
        // </div>
    )
}