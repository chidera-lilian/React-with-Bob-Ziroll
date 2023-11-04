import React from 'react';
import './App.css';
import './server';
import Footer from './Footer';

export default function Vans() {
    const [vans, setVans] = React.useState([]);
    React.useEffect(function(){
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    console.log(vans)

    const allVans = vans.map(function(van) {
        return (
            <>
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
            </>
        )
    })
    return (
        <>
            <section className="vans-section">
                <div className="van-section-container">
                    <h1> Explore Our Van Options</h1>
                    <div className="some-links">
                        <button type='button'><a href="#">one</a></button> 
                        <button type='button'><a href="#">one</a></button>
                        <button type='button'><a href="#">one</a></button>
                        <button type='button'><a href="#">one</a></button>
                    </div>
                    <div className="all-vans">
                        {allVans}
                    </div>
                </div>
            </section>
        </>
    )
}