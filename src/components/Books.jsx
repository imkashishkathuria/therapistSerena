import React from 'react'

const Books = () => {
  return (
    <div id='testimonials' className='flex flex-col gap-12 px-10 md:px-20 lg:px-36 pt-10 md:pt-15 lg:pt-25 mb-25'>
      {/* Heading */}
      <div className='flex flex-col gap-4 text-[#1e4145e6]'>
        <div>
          <button className='text-[14px] rounded-[8px] font-[600] bg-[#fff1bb] px-5 py-2'>
            Authored Works
          </button>
        </div>
        <p className='font-bold text-3xl md:text-5xl text-[#1e4145e6]'>
          Serena's Books
        </p>

      </div>

      {/* Books  */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0 lg:flex justify-between sm:items-center lg:items-start'>
        {[
          {
            img: "https://m.media-amazon.com/images/I/61DD-xJbYmL._SY522_.jpg",
            head: "Baby Dolls & Ninja Swords: 6 True Tales of Play Therapy",
            subhead1: "Available on Amazon",
            subhead2: "Formats: Kindle & Paperback"
          },
          {
            img: "https://m.media-amazon.com/images/I/61yJl-Efi6L._SY522_.jpg",
            head: "Frozen Tears: 15 Stories of Blindness & Hope after Abortion",
            subhead1: "Available on Amazon",
            subhead2: "Formats: Kindle & Paperback"
          },
          {
            img: "https://m.media-amazon.com/images/I/51Mdh4iG0yL._SY522_.jpg",
            head: "99 Devotionals: Heart Reactions from the Book of Acts",
            subhead1: "Available on Amazon",
            subhead2: "Formats: Kindle"

          },
          {
            head: "Passion with Principle: How to Turn Romance into Lifelong Love",
            subhead1: "Coming Soon",
          }
        ].map(({ img, head, subhead1, subhead2 }, idx, arr) => (
          <div key={idx} className='shadow-lg hover:shadow-2xl lg:w-[275px] flex flex-col gap-3 rounded-[13px] '>
            {idx !== arr.length - 1 ?
              (<div className="w-full">
                <img
                  src={img}
                  className='w-full h-[338px] object-cover rounded-t-[13px]'
                  alt='Card'
                />
              </div>)
              : (
                <div className='flex flex-col w-full h-[338px] rounded-t-[13px] bg-[#E5E7EB] '>
                  <div className='flex justify-end px-2 py-2'>
                    <button className='text-[12px] font-semibold text-[#1e4145e6] bg-yellow-500 px-3 py-2 rounded-full'>
                      Coming Soon
                    </button>
                  </div>
                  <div className='text-gray-500 text-md flex justify-center items-center flex-grow'>
                    Cover Image Coming Soon
                  </div>
                </div>
              )}


            <div className='flex flex-col justify-between flex-grow px-7 pt-7 pb-6'>
              <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold text-[#1e4145e6]'>
                  {head}
                </p>
                <div className='flex flex-col text-gray-500'>
                  <p className='text-md'>{subhead1}</p>
                  <p className='text-[13px]'>{subhead2}</p>
                </div>
              </div>
              {idx !== arr.length - 1 ?
                (
                  <button className='w-full mt-6 px-4 py-2 text-[#1e4145e6] bg-[#b5dbdf] rounded-[7px] text-md text-center cursor-pointer'>
                    <p>View on Amazon</p>
                  </button>
                )
                :
                (
                  <button className='w-full mt-6 px-4 py-2 text-gray-500 bg-[#E5E7EB] rounded-[7px] text-md text-center'>
                    <p>Details Coming Soon</p>
                  </button>
                )
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books
