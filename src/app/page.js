import About from '@/components/About'
import Books from '@/components/Books'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Quote from '@/components/Quote'
import Services from '@/components/Services'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <div>
        <Toaster />
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Books />
      <FAQ />
      <Quote />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
