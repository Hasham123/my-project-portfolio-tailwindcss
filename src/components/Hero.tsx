import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id = "hero" className=' min-h-screen bg-no-repeat bg-[url(/nextprofile.PNG)] bg-left lg:bg-[15%]  bg-origin-border rounded-full'
    style={{backgroundSize:"20%",
      backgroundOrigin: "border-box"
    }}>
     <Navbar/>
     <div className='container grid gap-px lg:grid-columns-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className=' text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p data-aos="zoom-in-up">I am...</p> 
          <p data-aos="zoom-in-up">Hasham,</p>
          <p data-aos="zoom-in-up">Ul Haq.</p> 

        </div>
      </div>
     </div>
     
    </div>
  )
}

export default Hero
