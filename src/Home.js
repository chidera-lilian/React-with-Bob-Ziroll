import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';


export default function Home () {
    return (
        <>
            <section className='home'>
                <div className="home-content-container">
                    <h1>
                        You got the travel plans, we got the travel vans.
                    </h1>

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


