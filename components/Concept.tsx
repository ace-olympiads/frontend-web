import React from 'react'
import '../styles/Concept.module.css'
import rando from '../public/assets/welcomeImg.png'
import Image from 'next/image'
const Concept = () => {
  return (
    <div>
      <div className="concept-card">
        <div className="concept-img"><Image src={rando} alt="" /></div>
        <div className="concept-title">lProjectinle motiong</div>
      </div>
    </div>
  )
}

export default Concept
