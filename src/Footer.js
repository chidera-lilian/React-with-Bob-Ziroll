import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function Footer() {
    const d = new Date();
    let hour = d.getFullYear();
    return (
        <>
            <footer>
                <p>C {hour} #VANLIFE</p>
            </footer>
        </>
    )
}