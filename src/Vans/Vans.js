import React from 'react';
import '../server';
import { BrowserRouter, Route, Routes, NavLink, useSearchParams } from 'react-router-dom';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

//typeFilter is basically asking if a filter of type exists in the vans array

/*  Link State
        This is different from react.useState.
        You use Link State when you want to keep the filtering on your page after clicking the back btn
 */


export default function Vans() {
    const [searchparams, setSearchParams] = useSearchParams()//search params functions like state
    const [vans, setVans] = React.useState([]);

    const typeFilter = searchparams.get('type')
    console.log(typeFilter)



    React.useEffect(function(){
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    console.log(vans)

    const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans

    //displayedVans becomes the new array that will be mapped over. .filter() returns an array just like .map()
    /* If typefilter exists, then filter vans else return vans as it is.
    We use the .lowercase() method to make sure every letter in the type value turns to lower case to avoid capitalization issues
    */

    /*
    Kept to absolute path in     <NavLink to={`/vans/${van.id}`} to avoid future confusions.

    The relative path would be <NavLink to={${van.id}} 
    */

    const allVans = displayedVans.map(function(van) {
        return (
            <>
            <NavLink 
            to={`/vans/${van.id}`} 
            state = {{
                search: `?${searchparams.toString()}`,
                type: typeFilter
            }}
            className='van-links'>
                <figure key={van.id}>
                    <img src={van.imageUrl} alt="" />
                    <figcaption>
                        <div className="van-details">
                        <h1>{van.name}</h1>
                        <p>{van.price}/day</p>
                        </div>
                        <button>
                            {van.type}
                        </button>
                    </figcaption>
                </figure>
            </NavLink>
            </>
        )
    })

    //We do this incase we want to add a new search params yadayada. The original and simpler code is below, outside the code base
    function genNewSearchParamStringKey(key, value) {
        const stringParam = new URLSearchParams(searchparams)
        if (value === null) {
            stringParam.delete(key)
        } else {
            stringParam.set(key, value)
        }
        return `?${stringParam.toString()}`
    }

    return (
        <>
            <section className="vans-section">
                <div className="van-section-container">
                    <h1> Explore Our Van Options</h1>
                    <div className="some-links">
                        
                        <NavLink 
                        to={genNewSearchParamStringKey('type', 'simple')}
                        className={`${typeFilter === 'simple' ? 'van-link' : ''}`}
                        >simple</NavLink>
                         
                        
                        <NavLink 
                        to={genNewSearchParamStringKey('type', 'rugged')}
                        className={`${typeFilter === 'rugged' ? 'van-link' : ''}`}
                        >rugged</NavLink>
                        
                        
                        <NavLink 
                        to={genNewSearchParamStringKey('type', 'luxury')}
                        className={`${typeFilter === 'luxury' ? 'van-link' : ''}`}
                        >luxury</NavLink>
                        
                        
                        { typeFilter ? <NavLink 
                        to={genNewSearchParamStringKey('type', null)}
                        className={`${typeFilter === '' ? 'van-link' : ''}`}
                        >all vans</NavLink> : null }

                        {/* For the code above, if there is a filter of type, that is if either simple, rugged or luxury has been clicked, then display 'all vans' else, display nothing. This runs as page loads*/}
                        
                        
                    </div>
                    <div className="all-vans">
                        {allVans}
                    </div>
                </div>
            </section>
        </>
    )
}


/*
 <NavLink 
    to="?type=simple"
    className={`${typeFilter === 'simple' ? 'van-link' : ''}`}
>simple</NavLink>
                         
                        
<NavLink 
    to="?type=rugged"
    className={`${typeFilter === 'rugged' ? 'van-link' : ''}`}
>rugged</NavLink>
                        
                        
<NavLink 
    to="?type=luxury"
    className={`${typeFilter === 'luxury' ? 'van-link' : ''}`}
>luxury</NavLink>
                        
                        
{ typeFilter ? <NavLink 
    to="."
    className={`${typeFilter === '' ? 'van-link' : ''}`}
>all vans</NavLink> : null }

*/