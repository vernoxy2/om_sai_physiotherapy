import React from 'react'
import PrimaryBtn from '../../../component/PrimaryBtn'

const ProductSection = ({ProductImg, ColorText, Headtext, SubText1, SubText2, onOpen }) => {
  return (
    <div>
      <div className="flex flex-col justify-between h-[470px] border bg-slate-200 rounded-xl p-6 py-7 relative">
          <div className="space-y-4">
            <h1>{Headtext}&nbsp;<span className='text-[#969696]'>{ColorText}</span></h1>
            <p className="w-full h-0.5 bg-[#696969]" />
            <p className="w-[50%]">
              {SubText1}
            </p>
            <p className="w-[50%]">
              {SubText2}
            </p>
          </div>

          {/* ✅ FIXED BUTTON */}
          <PrimaryBtn onClick={onOpen} className="w-[50%]">More Details</PrimaryBtn>
          <img src={ProductImg} alt="" className="absolute right-0 bottom-1/3 translate-y-1/2"/>
        </div>
    </div>
  )
}

export default ProductSection
