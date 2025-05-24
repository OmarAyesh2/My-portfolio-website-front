import React from 'react';
import { ContentContext } from '../context/ContentContext';
import {Link, useLocation} from 'react-router-dom';
import { IoMenuOutline, IoClose } from "react-icons/io5";

import Home from '../icons/Home';
import Work from '../icons/Work';
import About from '../icons/About';
import Contact from '../icons/Contact';


import './layout.css';

const baseURL = import.meta.env.VITE_BASE_URL;


function Layout({children}) {
  const location = useLocation();

  const [sideOpened, setSideOpened] = React.useState(false);

  const {content} = React.useContext(ContentContext);

  React.useEffect(() => {

    let cond1 = location.pathname === '/' || location.pathname === '';
    let cond2 = location.pathname === '/work';
    let cond3 = location.pathname === '/about';
    let cond4 = location.pathname === '/contact';

    if (cond1 || cond2 || cond3 || cond4) {
        document.querySelector('main').scrollTo({top: 0});
    }


  }, [location.pathname])

  return (
    <>
    <div className={`overlay ${sideOpened ? 'open' : ''}`} onClick={() => {
        setSideOpened(false);  
    }}></div>
    <button onClick={() => {
        setSideOpened(opened => !opened);
    }} className="toggle-side">
        {sideOpened ? (
            <IoClose />
        ): (
            <IoMenuOutline />
        )}
    </button>
    <aside className={`sidebar ${sideOpened ? 'open' : ''}`}>
        <div>
            <div className="main-img">
                <img src={content && content['profile'] ? baseURL+content['profile']['picture'] : ''} alt="" />
            </div>
            <h3>Omar Ayesh</h3>
        </div>
        <nav>
            <Link  className={location.pathname === '/' || location.pathname === '' ? 'selected' : ''} to='/'>
                <Home />
                <span>Home</span>
            </Link>
            <Link className={location.pathname === '/work' ? 'selected' : ''} to='/work'>
                <Work />
                <span>Works</span>
            </Link>
            <Link  className={location.pathname === '/about' ? 'selected' : ''} to='/about'>
                <About />
                <span>About</span>
            </Link>
            <Link  className={location.pathname === '/contact' ? 'selected' : ''} to='/contact'>
                <Contact />
                <span>Contact</span>
            </Link>
        </nav>
        
    </aside>
    <main>
        {children}
    </main>
    </>
  )
}

export default Layout
