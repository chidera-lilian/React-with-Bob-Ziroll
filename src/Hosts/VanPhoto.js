import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanPhoto () {
    const { EachVan } = useOutletContext()

    return (
        <>
        <img 
        className='img '
        style={{height: '30%', maxWidth: '40%', alignSelf: 'center'}}
        src={EachVan.imageUrl} 
        alt="where?" />
        </>
    )
}