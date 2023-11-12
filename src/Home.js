import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';


export default function Home () {
    return (
        <>
            <section className='home'>
                <div className="home-content-container">
                    <h1>
                        You got the travel plans, we got the travel vans.
                    </h1>
                ahhhhhhh testing continuous deployment   
                    <p>
                        Add adventure to your life by joining the <span>#vanlife</span> movement.
                        <br />
                        Rent the perfect van to make your perfect road trip.
                    </p>

                    <button>
                        <Link to='/vans'>Find your van</Link>
                    </button>
                </div>
            </section>        
        </>
    )
}


