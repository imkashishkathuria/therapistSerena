import React from 'react'

const About = () => {
  return (
    <div id='about' className='flex flex-col bg-[#b5dbdf] py-10 md:py-15 lg:py-30 px-5 md:px-15 lg:px-35'>
      {/* Therapist */}
      <div className='flex flex-col lg:flex-row justify-between lg:px-5 lg:gap-13 pb-10 lg:pb-30 items-center lg:items-start'>
        <div className='lg:w-1/2 py-5 md:py-5 lg:py-20 px-10 md:px-25 lg:px-5 '>
          <div className=''>
            <img src='/therapist.jpg' className='lg:object-cover lg:w-full lg:h-full border-[10px]  border-[#e5e7eb] rounded-[5%]' />
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <p className='font-bold text-4xl md:text-5xl text-[#1e4145e6]'>
            Hi I'm Serena Blake
          </p>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-6 lg:w-[576px] h-auto text-xl md:text-2xl font-medium line-clamp-6 text-[#1e4145e6] leading-[30px] md:leading-[40px]'>
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like <strong>cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.</strong> Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
              <p>
                My therapeutic approach is rooted in <span className="font-semibold">Christian principles,</span> aiming to foster <span className="font-semibold">spiritual growth,</span> the <span className="font-semibold">deepening of relationships,</span> and a greater sense of <span className="font-semibold">inner peace.</span> I am passionate about helping clients grow in their capacity to love and in their trust for God's love for them.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Brands  */}
      <div className='flex justify-center lg:hidden'>
      <h2 className='pb-8 text-[#1e4145e6] text-3xl font-bold'>
          Featured In
        </h2> 
        </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  justify-items-center gap-14 md:gap-5  lg:px-20'>

        <h2 className='hidden lg:block text-[#1e4145e6] text-3xl font-bold w-[134px] h-[72px] '>
          Featured In
        </h2>
        {[
          "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpsychologyToday-logo.4e0fdee7.webp&w=640&q=75",
          "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheravive.907f65bb.png&w=640&q=75", "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FChristianCounselorDirectory.bd202c5a.png&w=640&q=75",
          "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/static/media/Therapist.com-logo.43d1c2a1.svg"].map((item, idx) => (

            <img key={idx} src={item} className='md:w-[200px] md:h-[65px]  cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105' />

          ))}

      </div>

      
    </div>
  )
}

export default About
