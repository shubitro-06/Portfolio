import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className='bg-[#1A0B2E]'>
      <div className="container">
        <div className='text-white flex justify-between py-9.25 font-inter items-center'>
          <h1 className='text-3xl'>SHUBITRO</h1>
          <div>
            <ul className='flex gap-42'>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar
