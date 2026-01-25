import React from 'react'
import Me from '../src/assets/Me.png'
import ball from '../src/assets/BgBall.png'

// style={{ backgroundImage: `url(${ball})` }}
const Banner = () => {
    return (
        <>
            <div className="container">
                <div className='flex '>
                    <div className='relative h-[588px] w-[557px] bg-[url(src/assets/BgBall.png)] h-[588px] w-[557px] ' >
                        {/* <img src={ball} alt="" /> */}
                        <img src={Me} alt="" className='absolute top-[267px] left-[257px] ' />
                    </div>
                    <div className='font-prea mt-49.5 absolute top-[109px] left-183'>
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
