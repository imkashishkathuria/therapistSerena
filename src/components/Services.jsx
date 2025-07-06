import React from 'react'

const Services = () => {
  return (
    <div id='services' className='flex flex-col'>
      <div className='flex-col px-5 md:px-10 lg:px-36 pt-10 md:pt-25 pb-10 md:pb-20'>
        {/* Heading */}
        <div className='font-bold text-5xl md:text-6xl text-[#1e4145e6] text-center lg:text-start'>
          <h2>How I Help</h2>
        </div>
        {/* Cards  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between gap-5 lg:gap-8 mt-5 md:mt-15'>


          {[
            {
              img: "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwomanPrayingOutdoor.99f58aaf.jpg&w=2048&q=75",
              head: "Anxiety & Stress Management Counseling in Los Angeles, CA",
              subhead: "Discover Peace, Purpose, and God's Truth in Los Angeles, CA.",
            },
            {
              img: "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCouplesHappyHoldingBible.225997a3.jpg&w=2048&q=75",
              head: "Relationship Counseling in Los Angeles, CA",
              subhead: "Heal Your Relationship, Grow Closer to God Together in Los Angeles, CA.",
            },
            {
              img: "https://apex.rehab/wp-content/uploads/2023/10/What-is-Trauma-Therapy.png",
              head: "Trauma Recovery Counseling in Los Angeles, CA",
              subhead: "Heal Your Trauma, Grow Closer to God Together in Los Angeles, CA.",
            }
          ].map(({ img, head, subhead }, idx) => (

            <div key={idx} className='bg-[#b5dbdf] text-[#1e4145e6] flex flex-col justify-between gap-4 rounded-[12px] border-2 border-[#1e4145] p-7 cursor-pointer'>
              <div className='flex flex-col gap-3'>
                <img src={img} className='object-cover w-full h-[200px]' />
                <p className='text-2xl font-bold'>
                  {head}
                </p>
                <p className='text-md'>
                  {subhead}
                </p>

              </div>
              <div className='w-full'>
                <button className='w-full text-md px-4 py-2 bg-[#b5dbdf] rounded-[7px] border-2 border-[#1e4145] items-center hover:bg-white cursor-pointer'>
                  <p>
                    Learn More
                  </p>
                </button>
              </div>
            </div>

          ))}

        </div>

      </div>

      <div className='bg-[#1e4145e6] text-[#B5DBDF] px-7 md:px-36 py-10 lg:py-18 flex flex-col lg:flex-row gap-7 md:gap-10 lg:gap-0 lg:justify-between items-center'>
        <div className='lg:w-[239px] lg:h-[80px]'>
          <h2 className='text-[36px] leading-[40px] font-bold text-center'>
            Schedule A Consultation
          </h2>
        </div>
        <div className='items-center text-center md:w-[610px] md:h-[56px]'>
          <p className='text-xl font-bold'>
            Serena Blake is currently accepting new clients. Availabile for online and in-person sessions.
          </p>
        </div>
        <button className='group rounded-[12px] px-[26px] py-[12px] border-2 border-white cursor-pointer hover:bg-white'>
          <div className='flex gap-2 items-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mr-2 text-white group-hover:text-[#1e4145e6]"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            <p className='text-[18px] font-semibold text-white group-hover:text-[#1e4145e6]'>
              Start Healing
            </p>
          </div>
        </button>

      </div>

    </div>
  )
}

export default Services
