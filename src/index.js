import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot} from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Home from './Home.js';
import Nav from './Nav';
import Footer from './Footer.js';
import About from './About.js';
import Vans from './Vans.js';
import reportWebVitals from './reportWebVitals';

//I should have added the nav bar here, like i wanted to in the beginning. Curses.
//The links in the Link would always appear on all pages so there is no need to add the nav component to all pages. I should listen to myself more.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/vans' element={<Vans />}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  
);



// If you want to start measuring performance in your Home, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
