import React from 'react'
import about from '../src/assets/About.png'

const AboutMe = () => {
    return (
        <>
            <div className="container">
                <div className='text-center '>
                    <h1 className='text-6xl font-bold font-inter'> The <span className='text-[#7127BA]'>Skills</span> I Have </h1>
                </div>
                <div className='mt-20 relative'>
                    <img src={about} alt="" className='mx-auto block ' />
                    <p className='absolute top-[362px] left-[578px] text-5xl font-inter font-bold'>Pro On</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe
