// HomePage.jsx — Assembles all sections in order
import React from 'react'
import HeroSection from '../sections/HeroSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import VenturesSection from '../sections/VenturesSection.jsx'
import MotivationSection from '../sections/MotivationSection.jsx'
import PartnersSection from '../sections/PartnersSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'

const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <VenturesSection />
    <MotivationSection />
    <PartnersSection />
    <ContactSection />
  </>
)

export default HomePage
