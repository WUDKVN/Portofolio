import React from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import Service from './components/service';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  return (
    <div>
    <Nav />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
       <Footer />
      </section>
    </div>
  );
}

export default App;
