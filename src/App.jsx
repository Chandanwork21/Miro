import React from 'react'
import Navbar from './Components/Navbar'
import HeaderSection from './Components/HeaderSection'
import CompanyTrustedSection from './Components/TrustedSection'
import UsersSection from './Components/UsersSection'
import TrustPage from './Components/CompanyTrustSection'
import FeedbackSection from './Components/FeedbackSection'
import BenefitsSection from './Components/BenefitsSection'
import WorkSection from './Components/WorkSection'
import BuiltForSection from './Components/BuiltForSection'
import Footer from './Components/Footer'



const App = () => {
  return (
       <>
       <Navbar/>
       <HeaderSection/>
       <CompanyTrustedSection/>
       <BenefitsSection/>
       <WorkSection/>
       <BuiltForSection/>
       <TrustPage/>
       <FeedbackSection/>
       <UsersSection/>
       <Footer/>
      </>
      // logos are from 1000logos.net
      // icons are from lucide react library
  )
}

export default App