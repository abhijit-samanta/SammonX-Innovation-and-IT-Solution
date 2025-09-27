import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';
import Career from './page/Career';
import Works from './page/Works';
import Process from './page/Process';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="pt-16"> {/* Add top padding to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/works" element={<Works />} />
            <Route path="/process" element={<Process />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
