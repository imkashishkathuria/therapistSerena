import React from 'react'
import ContactsForm from './ContactsForm'

const Contact = () => {
  return (
    <div id='contact' className='bg-[#b5dbdf] items-center md:items-start flex flex-col-reverse md:flex-row justify-between md:gap-15 lg:gap-20  lg:pb-10 lg:px-36'>
      {/* Addres */}
      <div className='flex flex-col items-center md:items-start gap-8 py-10 md:py-25 text-[#1e4145e6] px-10 '>
        <div className='flex flex-col gap-3 items-center md:items-start'>
          <p className='text-4xl font-bold'>
            Our Office
          </p>
          <div className='flex flex-col items-center md:items-start'>
            {["1287 Maplewood Drive", "Los Angeles,", "CA 90026"].map((item, idx) => (
              <div key={idx} className='text-xl '>
                {item}
              </div>
            ))}
            <div className='py-2'>
            <button className='bg-[#1e4145e6] cursor-pointer text-[#B5DBDF] px-2 py-2 rounded-[4px]'>
              Google Maps
            </button>
            </div>
          </div>

        </div>

        <div className='flex flex-col gap-3 items-center md:items-start'>  
          <p className='text-4xl font-bold '>
              Hours
          </p>

          <div className='flex flex-col text-xl items-center md:items-start'>
            {["In-person:", "Tue & Thu, 10 AM–6 PM", "Virtual via Zoom:", "Mon, Wed & Fri, 1 PM–5 PM"].map((item, idx) => (
              idx % 2 === 0 ? 
              <div key={idx} className='font-bold'>
                {item}
              </div>
              : 
              <div key={idx}>
                {item}
              </div>
            ))}
          </div>

        </div>

        <div className='flex flex-col gap-3'>  
          <p className='text-4xl font-bold'>
              Contact
          </p>

          <div className='flex flex-col text-xl'>
            <div className='flex gap-2 items-center cursor-pointer '>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#1e4145e6" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                <div>
                  (323) 555-0192
                </div>
            </div>
          </div>

        </div>

      </div>
      {/* Contact form */}
      <div className='px-5 md:px-0 py-10 md:py-20 lg:py-7 md:pr-5 lg:pr-20'>
            <ContactsForm />
      </div>
    </div>
  )
}

export default Contact
