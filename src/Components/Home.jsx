import React from 'react'
import pic from '../assets/Images/avataaars.svg'

export default function Home() {
  return (
    <>
    <div className='Home d-flex flex-column align-items-center text-white text-center'>
    <img src={pic} className='w-25 py-3' alt=''/>
    <h1 className='fs-1 fw-bolder'>START FRAMEWORK</h1>
    <div>
    <i className='fa-solid fa-star p-2 '> </i>
    <i className='fa-solid fa-star p-2 '> </i>
    <i className='fa-solid fa-star p-2 '> </i>
    </div>
    <p className='fs-5 pb-5'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
