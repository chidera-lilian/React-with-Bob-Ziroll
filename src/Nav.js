import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

//all the links have been added. Time to remove the nav components from the home and about components

export default function Nav() {
    return (
        <>
            <header>
                <nav>
                    <h1 className='hover'>
                        <Link to="/">#VanLife</Link>
                    </h1>
                    <ul>
                        <li className='hover'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='hover'>
                        <Link to="/vans">Vans</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}