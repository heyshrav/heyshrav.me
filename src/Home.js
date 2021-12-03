import React from 'react'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Header from './components/Header'
import WorkSection from './components/WorkSection'

function Home() {
  return (
    <div>
      <Header /> 
      <WorkSection /> 
      <AboutSection /> 
      <ContactSection />
      </div>
  )
}

export default Home
