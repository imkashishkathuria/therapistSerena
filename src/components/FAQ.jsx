"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [{
    question: "What are your fees?",
    answer: (
      <span>
        My fees are <strong>$200 / individual session, $240 / couples session</strong>
      </span>
    )
  },
  {
    question: "Do you accept insurance? ",
    answer: (
      <span>
        No, but a superbill is provided for self-submission.
      </span>
    )
  },
  {
    question: "Are online sessions available?",
    answer: (
      <span>
        Yes—all virtual sessions via Zoom.
      </span>
    )
  },
  {
    question: "What is your cancellation policy?",
    answer: (
      <span>
        24-hour notice required.
      </span>
    )
  },
  {
    question: "What are your office hours?",
    answer: (
      <span>
        My office hours are <strong>In-person: Tue & Thu, 10 AM–6 PM, Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</strong>
      </span>
    )
  },
  {
    question: "What services do you offer?",
    answer: (
      <span>
        I offer <strong>Individual Therapy </strong>and <strong>Couples Therapy. </strong>My practice focuses on areas such as <strong>Christian counseling, </strong>spiritual growth, deepening relationships, healing past wounds, and discovering your life's purpose.
      </span>
    )
  },

  ]

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div id='faq' className='flex flex-col bg-[#b5dbdf] px-5 md:px-20 lg:px-36 py-10 md:py-25'>
      {/* Heading */}
      <div className='font-bold text-4xl md:text-6xl text-[#1e4145e6]'>
        <h2>Frequently Asked Questions</h2>
      </div>
      {/* Questions */}
      <div className='flex flex-col pt-15 w-full '>
        {faqList.map(({ question, answer }, idx) => (
          <div
            key={idx}
            className={`flex justify-between w-full py-8 pr-3 cursor-pointer ${idx === 0 ? "border-t-2" : ""
              } border-b-2 border-black`}
            onClick={() => handleToggle(idx)}
          >
            <div className='flex flex-col gap-3'>
              <p className='text-2xl lg:text-3xl text-[#1e4145e6] font-bold hover:text-[#1e4145e6]/80'>
                {question}
              </p>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className='overflow-hidden'
                  >
                    <div className="py-2 text-2xl text-[#1e4145e6]/90">
                     {answer}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1e4145e6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide h-4 w-4 shrink-0 transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""
                }`}>
              <path d="m6 9 6 6 6-6"></path></svg>

          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
