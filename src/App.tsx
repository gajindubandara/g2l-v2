// import './App.css'
//
// function App() {
//
//   return (
//     <>
//
//     </>
//   )
// }
//
// export default App
// src/App.tsx
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/styles.css';
import ParticleBackground from "./components/ParticleBackground.tsx";
import MusicPlayer from "./components/TrackPlayer.tsx";

const App: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <ParticleBackground/>
            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <Contact />
            <MusicPlayer/>
            <Footer />
        </>
    );
};

export default App;