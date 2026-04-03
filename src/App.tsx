import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoadingScreen />;
  }
  return <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero/>
        <About/>
        <SkillsSection />
        <Education/>
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}