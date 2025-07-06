import React from 'react'
import CandleAnime from './CandleAnime'

import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
})

const Quote = () => {
  return (
    <div className='bg-[#f5f7fa] flex flex-col items-center lg:flex-row gap-30 lg:gap-80 lg:py-50 lg:px-40'>
      {/* Animation */}
      <div className="relative lg:py-23 lg:pl-70">
          <CandleAnime />
      </div>
      {/* Quote */}
      <div 
        className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e4145e6] text-center ${pacifico.className} px-4 lg:px-0 pb-10 lg:pb-0`}>
          “Come to me, all who labor and are heavy laden, and I will give you rest.” <div>— Matthew 11:28</div>
      </div>
    </div>
  )
}

export default Quote
