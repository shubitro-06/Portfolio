import React from 'react'
import Me from '../src/assets/Me.png'

const Banner = () => {
    return (
        <>
            <div className="container">
                <div className='flex'>
                    <div className='bg-[url(src/assets/BgBall.png)] w-137 h-141.5 '>
                        <img src={Me} alt="" className='absolute top-94.5 left-110.5' />
                    </div>
                    <div className='font-prea mt-49.5'>
                        <h6 className='text-xl'>Hello! I Am <span className='text-[#7127BA]'>Shubitro Candra Dev</span> </h6>
                        <div className='pt-23.25 '>
                            <p>A Developer who</p>
                            <h1 className='text-[50px]'>Judges a book <br />
                                by its <span className='text-[#7127BA]'>cover</span>...</h1>
                            <p className='text-sm'>Because if the cover does not impress you what else can?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
