import React from 'react';
import BgImg from '../assets/FooterPageImgs/BgImg.png'
import FooterData from './FooterData';

const Footer = () => {
  return (
    <section
    style={{backgroundImage: `url(${BgImg})`}}
    className='bg-no-repeat bg-center bg-cover'
    >
<FooterData/>
    </section>
  )
}

export default Footer
