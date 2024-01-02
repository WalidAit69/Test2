import React from 'react'
import AccueilBanner from './AccueilBanner'
import AccueilSection1 from './AccueilSection1'
import AccueilSection2 from './AccueilSection2'
import AccueilPrerequis from './AccueilPrerequis'
import Location from './Location'
import "./Acceuil2.css"
import "./Acceuil3.css"
import Contact from './Contact'
import AccueilSection3 from './AccueilSection3'
import ContactInfo from './ContactInfo'
import ReviewsSection from './ReviewsSection'

function Accueil() {
  return (
    <>
      <AccueilBanner />
      <AccueilSection1 />
      <AccueilPrerequis />
      <AccueilSection2 />
      <Location/>
      <Contact/>
      <AccueilSection3/>
      <ContactInfo/>
      <ReviewsSection/>
    </>
  )
}

export default Accueil