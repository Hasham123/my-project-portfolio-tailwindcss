import React from 'react'

const skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className='text-6xl md:text-8xl'>
                MY SKILLS
            </h2>
            <p className='text-blue-200 pt-2 text-left'>
            I am a passionate frontend developer specializing in building dynamic and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I have expanded my expertise to include modern technologies like TypeScript, React, Next.js, and Tailwind CSS. My journey in frontend development is fueled by continuous learning and a commitment to creating impactful digital experiences. In addition to my technical skills, I excel in sales and digital marketing, which allows me to combine technical proficiency with a strategic mindset to deliver solutions that drive growth and engagement.

            </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space space-y-2'>
                    <h3 data-aos="zoom-in-up">HTML</h3>
                    <h3 data-aos="zoom-in-up">CSS</h3>
                    <h3 data-aos="zoom-in-up">Ts/Js</h3>
                    <h3 data-aos="zoom-in-up">Next.js</h3>
                </div>
                <div className='space space-y-2'>
                    <h3 data-aos="zoom-in-up">Sales</h3>
                    <h3 data-aos="zoom-in-up">Digital Marketing</h3>
                    <h3 data-aos="zoom-in-up">Social Media Management</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default skills
