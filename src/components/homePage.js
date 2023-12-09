import React from 'react'
import RightHalf from './rightHalf'
import LeftHalf from './leftHalf'

function homepage() {
  return (
    <div className=' md:flex w-screen'>
      <div className='md:w-3/5'><LeftHalf /></div>
      <div className='md:w-2/5'><RightHalf /></div>
    </div>
  )
}

export default homepage
