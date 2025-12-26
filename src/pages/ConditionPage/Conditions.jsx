import React from 'react'
import Head from './ConditionSection.jsx/Head';
import ConditionTreat from './ConditionSection.jsx/ConditionTreat';
import Footer from '../../component/Footer';

const Conditions = () => {
  return (
    <div className='py-0'>
      <Head />
       <section
        className="relative space-y-20 py-10 md:py-14 lg:py-20 bg-white
                   before:absolute before:h-14 before:w-full before:bg-white before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px] before:z-[1]
                   after:absolute after:h-14 after:w-full after:bg-white after:-bottom-12 after:content-[''] after:rounded-b-[33px] after:md:rounded-b-[66px] after:z-[1]"
      >
      <ConditionTreat /> 
      </section>
        
      
    </div>
  )
}

export default Conditions
