import React from 'react';
import BgImg from '../../../assets/FAQPageImgs/BgImg.png'

const Head = () => {
  return (
    <section
    style = {{backgroundImage: `url(${BgImg})`}}
      className="bg-no-repeat bg-cover bg-center items-center justify-start flex lg:h-screen max-h-auto"
    >
         <h1 className="text-priamry leading-snug container">Frequently Asked<br/><span className="text-white">Questions</span></h1>
    </section>
  )
}

export default Head
