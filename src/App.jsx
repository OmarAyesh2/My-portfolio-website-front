import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css'

import Layout from './layout/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const Works = React.lazy(() => import('./pages/Works'));

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/work' element={<Works />} />
      </Routes> 
    </Layout>
  )
}

export default App
