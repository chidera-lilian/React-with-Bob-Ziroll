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
import VanDetails from './VanDetails.js';
import reportWebVitals from './reportWebVitals';

//I should have added the nav bar here, like i wanted to in the beginning. Curses.
//The links in the Link would always appear on all pages so there is no need to add the nav component to all pages. I should listen to myself more.

//New info
/*<Route path='/vans/:id' element={<VanDetails />}/>
  Just as we created a page in the musicvid page and gave each video elemnent an 'html?id=1' yadayada. We are doing the same here. Basically /vans/:id means link to van, and then link to the element with that unique id. The id here acts as a variable. the :id is like a variable and can be changed to anything!!!!! and acts as a key. You can also have multiple :something on your path.

  The <Link to> in vans.js tag was used to wrap around all each mapped elements. 
    Link to={`/vans/${van.id}`} :- This means that we are wo, its like urlparam. It sha takes us to the page with the same id as the id of the element that has been clicked.Godspeed to us in the future.
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/vans' element={<Vans />}/>
        <Route path='/vans/:id' element={<VanDetails />}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  
);



// If you want to start measuring performance in your Home, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
