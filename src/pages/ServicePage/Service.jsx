import React from 'react'
import PhysioHead from './ServiceSection/PhysioHead'
import ChiropracticCare from './ServiceSection/ChiropracticCare'
import MassageTherapy from './ServiceSection/MassageTherapy'
import ShockwaveTherapy from './ServiceSection/ShockwaveTherapy'
import SpinalTraction from './ServiceSection/SpinalTraction'

const Service = () => {
  return (
    <div>
      <PhysioHead />
      <ChiropracticCare />
      <MassageTherapy />
      <ShockwaveTherapy />
      <SpinalTraction />
    </div>
  )
}

export default Service
