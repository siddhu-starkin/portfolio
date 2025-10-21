import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import About from './pages/About';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export const App = () => {
  return (
    <Router>
      <div className="text-neutral-950 text-base not-italic normal-nums font-normal accent-auto bg-black box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible w-full border-separate font-geistsans_fb8f2c">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      <section
        aria-label="Notifications alt+T"
        className="box-border caret-transparent"
      ></section>
      <div
        role="region"
        aria-label="Notifications (F8)"
        className="box-border caret-transparent pointer-events-none"
      >
        <ol className="fixed box-border caret-transparent flex flex-col-reverse list-none max-h-[1000px] max-w-none w-full z-[100] p-4 right-auto top-0 bottom-auto md:flex-col md:max-w-[420px] md:right-0 md:top-auto md:bottom-0"></ol>
      </div>
      <div className="absolute box-border caret-transparent block"></div>
      </div>
    </Router>
  );
};

export default App;