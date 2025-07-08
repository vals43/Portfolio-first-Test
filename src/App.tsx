import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MethodologySection from './components/MethodologySection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
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
        <HeroSection />
        <MethodologySection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}