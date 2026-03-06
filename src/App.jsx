import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <title>VIP SÉCURITÉ 31 | Agence de Sécurité à Toulouse</title>
          <meta name="description" content="VIP SÉCURITÉ 31 propose des services de sécurité incendie, gardiennage, et prévention à Toulouse. Expert en sécurité cynophile et intervention." />
        </Helmet>

        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
