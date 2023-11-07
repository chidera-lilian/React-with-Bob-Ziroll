import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanPhoto () {
    const { EachVan } = useOutletContext()

    return (
        <figure>
        <img src={EachVan.imageUrl} alt="where?" />
        </figure>
    )
}