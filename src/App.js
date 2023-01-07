import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//you can use MemoryRouter for react native and testing purposes
// This is Third example of router which is based on latest version of router.i.e. 6
//here we are not using router,routes, route component. 
//router,routes, route component are automatically formed by RouterProvider internally when we provide router object to it.
// after running this code write url => http://localhost:3000/ for home page 
// and http://localhost:3000/about for about us page and http://localhost:3000/contact 
//for contact us page bz link is not created on web page.
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
    
    
    
  );
}

function Home() {
  return <h2>Home page</h2>;
}

function About() {
  return <h2>About us page</h2>;
}
function Contact() {
  return <h2>Contact us page</h2>;
}






