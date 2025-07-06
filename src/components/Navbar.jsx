"use client"

import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
          { 
            name: "Services", 
            id: "services" 
          }, 
          {
            name: "About", 
            id: "about" 
          }, 
          {
            name: "Testimonials", 
            id: "testimonials"
          },
          {
            name: "Rate & FAQs", 
            id: "faq" 
          },
          {
            name: "Areas Served", 
            id: "footer" 
          },
          {
            name: "Contact", 
            id: "contact"
          }
        ];

  return (  
    <>
    <div className={`flex justify-between px-6 md:px-20 lg:px-30 py-2 fixed top-0 left-0 z-50 transition-all max-w-2xl w-full lg:max-w-full md:max-w-3xl  mx-auto  duration-300 ${scrolled ? 'bg-[#e5e7eb]/80' : 'bg-[#e5e7eb]'} `}>
      {/* Logo  */}
      <div>
        <img src='/logo.png' className='object-fit w-[220px] h-[100px] cursor-pointer' />
      </div>
      {/* nav  */}
      <div className='hidden lg:flex justify-between gap-8 items-center'>
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={`#${item.id}`}
            className='text-[#1e4145] font-normal text-[20px] px-2 py-2 rounded-[12px] cursor-pointer transition-all duration-300 ease-in hover:bg-white/80'
          >
            {item.name}
          </a>

        ))}
      </div>
      <div className='relative flex items-center'>
      <div onClick={toggleMenu} className='lg:hidden cursor-pointer'>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#1e4145" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
      </div>
      <div className={`fixed top-0 right-0 h-screen bg-white w-1/2 max-w-sm z-50 transform ${isOpen ? "w-1/2 md:w-3/4 max-w-sm translate-x-0" : "w-0 translate-x-full"} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-gray-700 text-lg font-bold">X</button>
      </div>
      <div className="p-5 md:p-10 flex flex-col items-center gap-4 cursor-pointer border-y-2 border-[#1e4145]">
          {navItems.map((item, idx) => (
          <a
            key={idx}
            href={`#${item.id}`}
            className='text-[#1e4145] font-normal text-[20px] md:text-[25px] px-2 py-2 rounded-[12px] cursor-pointer transition-all duration-300 ease-in hover:bg-white/80'
          >
            {item.name}
          </a>

        ))}
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Navbar