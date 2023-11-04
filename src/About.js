import React from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';


export default function About() {
    return (
        <>
            <section className="about-section">
                <div className="about-section-container">
                    <div className='banner'>
                    <h1>
                        Don't squeeze into a sedan when you can relax in a van
                    </h1>

                    <div className="ps">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nemo placeat quasi voluptatem fuga vitae itaque maxime cum fugiat, repellendus tempore adipisci quisquam aliquam quis ducimus dicta facilis ratione perferendis.
                    </p>

                    <p className='p2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo libero explicabo repellat nam impedit nisi, eum ipsam enim corporis!
                    </p>
                    </div>
                    </div>

                    <div className="text-container">
                        <h1>
                            Your destination is waiting.
                            <br />
                            Your van is ready
                        </h1>

                        <button>
                            <a href="#"> Explore our vans</a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}