import './App.css';
import React from 'react';
import {BrowserRouter as Router,  Routes, Route, Link } from 'react-router-dom';
//import {MemoryRouter as Router,  Routes, Route, Link } from 'react-router-dom';

// when we use MemoryRouter as Router, then it keeps the URL changes in memory instead of browser.
//hence browser's forward and backward button will not work when we use MemoryBrowser as Router
//MemoryRouter as Router is usefull for testing and non-browser enviroment like React native.
function AppBasicRouting() {
  return (
    <Router>
      <div className='app'>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/users"}>Users</Link>
          </li>
        </ul>

      </div>

    <Routes>
      <Route exact path="/"element={<Home/>}></Route>
      <Route exact path="about" element={<About/>}></Route>
      <Route exact path="/users" element={<Users/>}></Route>
    </Routes>

    </Router>
    
  );
}
//these functions can be on seperate .js page
function Home(){
return <h2>Home Page</h2>
}
function About(){
  return <h2>About Page</h2>
}
function Users(){
  return <h2>Users Page</h2>
}

export default AppBasicRouting;
