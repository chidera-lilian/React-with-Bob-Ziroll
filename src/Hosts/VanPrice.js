import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanPrice () {
    const { EachVan } = useOutletContext()
    return (
        <>
        <h4
        >Price: {EachVan.price} </h4>
        </>
    )
}