import React from 'react'
import './Hero.css'
import handicon from '../Assets/wel.png'
//simport arrowicon from '../Assets/hand-right.jpg'
import heroimg from '../Assets/1.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={handicon} alt='' />
            </div>
            <p>books</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            {/* <img src={handicon} alt='' /> */}
        </div>
      </div>
      <div>
        <div className='hero-right'>
          <img src={heroimg} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Hero
