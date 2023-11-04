import React from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';


export default function About() {
    return (
        <>
            <section className="about-section">
                <div className="about-section-container">
                    <figure>
                        <img src="/img/blue-pretty-color.jpg" alt="Ought to be a van picture"/>
                    </figure>

                    <h1>
                        Don't squeeze into a sedan when you can relax in a van
                    </h1>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nemo placeat quasi voluptatem fuga vitae itaque maxime cum fugiat, repellendus tempore adipisci quisquam aliquam quis ducimus dicta facilis ratione perferendis.
                    </p>

                    <p className='p2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo libero explicabo repellat nam impedit nisi, eum ipsam enim corporis!
                    </p>

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
                <Footer></Footer>
            </section>
        </>
    )
}