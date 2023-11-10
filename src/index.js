import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot} from 'react-dom/client';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './index.css';
import Home from './Home.js';
import Footer from './Navigations/Footer.js';
import About from './About.js';
import Vans from './Vans/Vans.js';
// import Header from './Header.js';
import Layout from './Layout.js';
import VanDetails from './Vans/VanDetails.js';
import reportWebVitals from './reportWebVitals';
//Host Contents
import HostDashboard from './Hosts/HostDashboard.js';
import Income from './Hosts/Income.js';
import Reviews from './Hosts/Reviews.js';
import Host from './Hosts/Host.js';
import ListedVans from './Hosts/ListedVans.js';
import Eachlvd from './Hosts/EachListedVanDetails.js';
import VanInfo from './Hosts/VanInfo.js';
import VanPhoto from './Hosts/VanPhoto.js';
import VanPrice from './Hosts/VanPrice.js';

//how to import imgages from other components <img src="/public/img/aot.jpeg" alt="" />
//I should have added the Header bar here, like i wanted to in the beginning. Curses.
//The links in the Link would always appear on all pages so there is no need to add the Header component to all pages. I should listen to myself more.
//We have now moved to LAYOUT ROUTE and I have to move the Header.js file to the components folder.
/* <Route element={<Layout/>}> has no path cause it is the component that will be displayed on all pages including the host page. but you can add a path and use index to specify which route would be the homepage. */

//New info for vans
/*<Route path='/vans/:id' element={<VanDetails />}/>
  Just as we created a page in the musicvid page and gave each video elemnent an 'html?id=1' yadayada. We are doing the same here. Basically /vans/:id means link to van, and then link to the element with that unique id. The id here acts as a variable. the :id is like a variable and can be changed to anything!!!!! and acts as a key. You can also have multiple :something on your path.

  The <Link to> tag in vans.js was used to wrap around all each mapped elements. 
    Link to={`/vans/${van.id}`} :- This means that we are wo, its like urlparam. It sha takes us to the page with the same id as the id of the element that has been clicked.Godspeed to us in the future.
*/

//New Info for nested routes
/**
 <Route index element={<HostDashboard />}/>
 Since the HostDashboard board is the 'homepage', the index is used to specify that.
 */

function NotFound() {
  return (
    <>
      <h4>
        404 <br />
        Page Not Found
      </h4>
      <NavLink to='/'>Return to Home</NavLink>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Relative Routes/paths
  <BrowserRouter>
      {/* <Header></Header> */}
      <Routes>
        {/* 1st nav bar */}
        <Route element={<Layout/>}>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id' element={<VanDetails />}/>


          {/* 2nd nav bar in first nav bar*/}
          <Route path='hosts' element={<Host />}>
            <Route index element={<HostDashboard />}/>
            <Route path='income' element={<Income />}/>
            <Route path='reviews' element={<Reviews />}/>
            <Route path='listedvans' element={<ListedVans />}/>
            <Route path='listedvans/:idclicked' element={<Eachlvd />}/>
    

            {/* 3rd nav bar in 2nd nav bar*/}
            <Route path='listedvans/:idclicked' element={<Eachlvd/>}>
              <Route index element={<VanInfo/>}/>
              <Route path='photo' element={<VanPhoto/>}/>
              <Route path='price' element={<VanPrice/>}/>


            </Route>
          </Route>
        </Route>
      </Routes>
  </BrowserRouter> 



  //Absolute Routes
  /* {/* <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>

          <Route path='/hosts' element={<HostLayout />}>
            <Route path='/hosts' element={<HostDashboard />}/>
            <Route path='/hosts/Income' element={<Income />}/>
            <Route path='/hosts/Reviews' element={<Reviews />}/>
          </Route>
          
          <Route path='/vans' element={<Vans />}/>
          <Route path='/vans/:id' element={<VanDetails />}/>
        </Route>
      </Routes>
  </BrowserRouter>  */
  
);



// If you want to start measuring performance in your Home, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
