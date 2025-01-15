import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection.tsx';
import { ServiceSection } from './components/sections/ServiceSection.tsx';
import { WebProjectSection } from './components/sections/WebProjectSection.tsx';
import {BrandingProjectSection} from "./components/sections/BrandingProjectSection.tsx";
import {ParticleBackground} from "./components/animations/ParticleBackground.tsx";
import {MusicProjectSection} from "./components/sections/MusicProjectSection.tsx";
import { ContactSection } from './components/sections/ContactSection.tsx';
import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

const App: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <ParticleBackground/>
            <Navbar />
            <HeroSection />
            <ServiceSection />
            <WebProjectSection />
            <MusicProjectSection/>
            <BrandingProjectSection/>
            <ContactSection />
            <Footer />
        </>
    );
};

export default App;