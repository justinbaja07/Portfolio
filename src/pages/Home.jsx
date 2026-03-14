import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import ProjectShowcase from '../components/portfolio/ProjectShowcase';
import AboutSection from '../components/portfolio/AboutSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

const HERO_BG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b5b9d1a9b1306ab268845b/0a8d68869_generated_01ae7bbc.png";
const SAVIRA_SCREENSHOT = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b5b9d1a9b1306ab268845b/c2148e80f_generated_cc7e82dd.png";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroSection heroBg={HERO_BG} />
      <ProjectShowcase saviraScreenshot={SAVIRA_SCREENSHOT} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}