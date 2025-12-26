import React from 'react'
import Head from './ContactUsSection/Head'
import Message from './ContactUsSection/Message'
import Loaction from './ContactUsSection/Loaction'

const ContactUs = () => {
  return (
    <div>
      <Head />
      <section
        className=" relative space-y-20 py-10 md:py-14 lg:py-20 bg-white
                   before:absolute before:h-14 before:w-full before:bg-white before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px] before:z-[1]
                   after:absolute after:h-14 after:w-full after:bg-white after:-bottom-12 after:content-[''] after:rounded-b-[33px] after:md:rounded-b-[66px] after:z-[1]"
      >

      <Message />
      <Loaction />
      </section>
    </div>
  )
}

export default ContactUs
