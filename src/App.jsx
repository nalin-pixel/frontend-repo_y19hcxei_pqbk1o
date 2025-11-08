import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Offerings from './components/Offerings.jsx';
import Pricing from './components/Pricing.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white selection:bg-yellow-300/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Offerings />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
