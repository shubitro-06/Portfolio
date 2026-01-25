import React from 'react'
import { FaGithub } from "react-icons/fa";

const MyWork = () => {
    return (
        <>
            <div className="container">
                <div className='mt-40'>
                    <h1 className='text-6xl font-bold font-inter text-center'> My Recent <span className='text-[#7127BA]'>Works</span></h1>
                </div>
                <div>
                    <div className='w-[368px] h-[280px] bg-[#7027ba4f] rounded-2xl'>
                        <div className='flex gap-5.5 justify-center'>

                        <a href="https://to-do-list-firebase-zeta.vercel.app/" target='_blank'> To Do List </a>
                    
                        <a href="https://github.com/shubitro-06/To-Do-list-firebase" target='_blank' className='text-3xl'><FaGithub /></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyWork
