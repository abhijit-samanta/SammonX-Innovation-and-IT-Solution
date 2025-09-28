import React, { lazy } from 'react';
import {  Routes, Route, BrowserRouter, HashRouter } from 'react-router';
import Home from './page/Home';

import WhatsAppButton from './components/ui/WhatsAppButton';
import Layout from './page/Layout';

const About = lazy(() => import("./page/About"))
const Services = lazy(() => import("./page/Services"))
const Career = lazy(() => import("./page/Career"))
const Works = lazy(() => import("./page/Works"))
const Process = lazy(() => import("./page/Process"))

function App() {
  return (
    
      <div className="App">
        
        
        {/* Main Content */}
        <main className="pt-16"> {/* Add top padding to account for fixed navbar */}
          <HashRouter>
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="career" element={<Career />} />
                <Route path="works" element={<Works />} />
                <Route path="process" element={<Process />} />
              </Route>
            </Routes>
          </HashRouter>
        </main>
        
       
      </div>
    
  );
}

export default App;
