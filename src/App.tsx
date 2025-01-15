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
import { WebProjectSection } from './components/WebProjectSection.tsx';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
// import ParticleBackground from "./components/ParticleBackground.tsx";
// import MusicProjectSection from "./components/MusicProjectSection.tsx";
import {BrandingProjectSection} from "./components/BrandingProjectSection.tsx";
import {ParticleBackground} from "./components/ParticleBackground.tsx";
import {MusicProjectSection} from "./components/MusicProjectSection.tsx";

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
            <WebProjectSection />
            {/*<ProjectSection/>*/}
            <MusicProjectSection/>
            <BrandingProjectSection/>
            <Contact />
            <Footer />
        </>
    );
};

export default App;