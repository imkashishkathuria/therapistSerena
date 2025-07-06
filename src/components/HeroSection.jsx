"use client"

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaCompass, FaHandshake, FaHeart } from 'react-icons/fa'

const HeroSection = () => {

  const items = [
    {
      title: "Greater Love in your relationships",
      icon: <FaHeart />,
    },
    {
      title: "Greater Purpose in your Life direction",
      icon: <FaCompass />,
    },
    {
      title: "Greater Peace in your heart",
      icon: <FaHandshake />,
    }]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className=''>

      <div className='flex flex-col'>

        <div className="relative w-full lg:h-screen">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center lg:h-180 "
            style={{
              backgroundImage:
                'url("https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-b.79c9c9cd.jpg&w=2048&q=75")',
              filter: 'brightness(75%)',
            }}
          />

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Centered Text */}
          <div className="relative lg:absolute lg:inset-0 z-10 flex flex-col gap-4 items-center justify-center pt-60 pb-20 md:pt-90 lg:pt-90 px-5 md:py-20 md:px-20 lg:py-40 lg:px-10 text-center">
            <p className="text-[14px] text-[#f5f7fa] font-normal max-w-xl">
              Christian Counseling Services in Los Angeles, CA &amp; Central Virginia
            </p>
            <p className='text-4xl font-extrabold'>
              Professional Counseling for Christian Healing and Growth
            </p>
            <p className='text-center font-normal text-xl lg:text-2xl leading-relaxed text-[#f5f7fa] md:px-25 lg:px-0'>
              Begin your journey today towards spiritual growth, deeper relationships, <span>and lasting inner peace.</span>
            </p>
            <p className='font-semibold text-xl lg:text-2xl leading-relaxed text-[#f5f7fa]'>
              I want to work with you for…
            </p>
            <div className="flex md:items-center justify-center overflow-hidden">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-2 md:gap-3 text:lg md:text-xl lg:text-2xl font-semibold text-[#97d1f8]"
                >
                  <span className="text-inherit flex items-center">{items[currentIndex].icon}</span>
                  <p>{items[currentIndex].title}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className='flex gap-3 '>
              <div className='flex gap-1 items-center'>
                <span className="text-md">⭐</span>
                <p className='font-semibold text-md leading-relaxed text-[#f5f7fa]'>
                  Top Rated
                </p>

              </div>
              <div className='flex gap-2'>
                {["8 + Years Experience", "Testimonials", "Media Mentions"
                ].map((item, idx) => (
                  <div key={idx} className='flex gap-2 items-center'>
                    <span>•</span>
                    <p className='font-semibold text-sm leading-relaxed text-[#f5f7fa] underline cursor-pointer hover:no-underline'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button className='rounded-[12px] px-[24px] py-[18px] bg-white shadow-[inset_0_2px_4px_rgba(147,197,253,0.5)] cursor-pointer'>
                <div className='flex gap-2 items-center'>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-sparkles text-blue-900 w-5 h-5 mr-2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                  <p className='text-[#1e3A8A] text-[18px] font-semibold'>Start Healing Today</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Experience  */}

          <div className='bg-[#1e4145e6]'>
            <div className='flex flex-col gap-15 md:gap-5 lg:gap-0 md:flex-row justify-between py-19 px-10 lg:px-[130px]'>
              {[

                {
                  head: "8+",
                  subhead: "Years Experience",
                  para: "Providing compassionate and effective Individual and Couples Therapy"
                },
                {
                  head: "500+",
                  subhead: "Individual Client Sessions",
                  para: "Helping individuals and couples heal, grow, and find purpose"
                }].map(({ head, subhead, para }, index ) => (
                  <div key={index} className='flex flex-col gap-3 items-center md:items-start'>
                    <p className='text-5xl font-bold'>
                      {head}
                    </p>
                    <p className='text-xl font-bold'>
                      {subhead}
                    </p>
                    <p className='text-md text-center md:text-start'>
                      {para}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

      </div>
  )
}

export default HeroSection
