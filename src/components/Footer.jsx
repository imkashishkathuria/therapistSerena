import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='bg-[#1e4145e6] flex flex-col gap-4  text-[#B5DBDF]'>
      {/* Top Section */}
      <div className='flex flex-col gap-10 md:flex-row justify-between md:gap-0 py-20 px-8 lg:px-70'>
        <div className='flex flex-col gap-2'>
          <img src='/logo.png' className='rounded-full bg-[#e5e7eb] px-1 py-1 w-[155px] h-[73px] ' />

          <div className='flex gap-3 '>
            <div className='flex gap-1 items-center'>
              <span className="text-md">⭐</span>
              <p className='font-semibold text-md leading-relaxed text-white w-[50px]'>
                Top Rated
              </p>

            </div>
            <div className='flex gap-2  w-[100px] items-center'>
              {["Testimonials", "Media Mentions"
              ].map((item, idx) => (
                <div key={idx} className='flex gap-2 items-center'>
                  <span>•</span>
                  <p className='font-semibold text-sm leading-relaxed text-white underline hover:no-underline cursor-pointer'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='w-[150px]'>
            1287 Maplewood Drive, Los Angeles, CA 90026
          </div>
          <div className='flex gap-2 items-center cursor-pointer hover:underline'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B5DBDF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
            (323) 555-0192

          </div>

          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#B5DBDF"
              className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
            </svg>
            serena@blakepsychology.com
          </div>

          <img src='https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpsychologyToday-logo.4e0fdee7.webp&w=640&q=75' className='w-[200px] h-[65px] cursor-pointer' />

        </div>

        <div className='flex flex-col gap-2'>
          {["Links", "Get In Touch", "Testimonials", "About Me", "FAQ's", "Therapies", "Blogs"].map((item, idx) => (
            idx === 0 ? (<p key={idx} className='font-bold'>
              {item}
            </p>)
              :
              (<p key={idx} className="hover:underline cursor-pointer">
                {item}
              </p>)
          ))}
        </div>

        <div className='flex flex-col gap-2'>
          {["Areas Served", "Los Angeles, CA", "San Francisco, CA", "San Diego, CA", "Sacramento, CA", "Silicon Valley, CA", "Wine Country, CA", "San Jose, CA", "California Beaches, CA", "Central Valley, CA", "National Parks, CA", "National Parks, CA", "Pasadena, CA", "Santa Barbara, CA", "Big Sur, CA", "Palm Springs, CA", "Carmel-by-the-Sea, CA"].map((item, idx) => (
            idx === 0 ? (<p key={idx} className='font-bold md:pl-5'>
              {item}
            </p>)
              :
              (<p key={idx} className="hover:underline cursor-pointer md:pl-5">
                {item}
              </p>)
          ))}
        </div>


        <div className='flex flex-col gap-2'>
          {["Services", "Christian Individual", "Counseling in Los Angeles, CA", "Christian Couples", "Counseling in Los Angeles, CA"].map((item, idx) => (
            idx === 0 ? (<p key={idx} className='font-bold'>
              {item}
            </p>)
              :
              (<p key={idx} className="hover:underline cursor-pointer">
                {item}
              </p>)
          ))}
        </div>

      </div>

      {/* Bottom section */}
      <div className='flex flex-col gap-10 md:gap-7 pb-10'>
        <hr className='border-t border-[#e5e7eb] w-full md:px-70' />
        <div className='flex flex-col items-center px-6 lg:px-70'>
          <p className='text-md'>
            Serena Blake © Copyright 2024. All Rights Reserved.
          </p>
          <p className='text-sm cursor-pointer'>Credits to freepik for media www.freepik.com People illustrations by Storyset</p>
          <p className='text-center text-md cursor-pointer hover:underline'>Privacy Policy & Terms of Service</p>
        </div>


      </div>
    </div>
  )
}

export default Footer
