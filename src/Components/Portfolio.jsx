import React from 'react'
import pic1 from '../assets/Images/poert1.png'
import pic2 from '../assets/Images/port2.png'
import pic3 from '../assets/Images/port3.png'

export default function Portfolio() {
  return (
    <div className='container text-center'>
     <h1 className='fs-1 pt-5 fw-bold text-dark'>PORTFOLIO SECTION</h1>
     <div>
     <i className='fa-solid fa-star p-2 text-dark'></i>
     <i className='fa-solid fa-star p-2 text-dark'></i>
     <i className='fa-solid fa-star p-2 text-dark'></i>
     </div>
     <div className="py-5 row g-4">
      <div className="col-md-4">
        <div className='rounded-2'>
          <img src={pic1} alt='' className='w-100 rounded-2'/>
        </div>
      </div>
      <div className="col-md-4">
        <div className='rounded-2'>
          <img src={pic2} alt='' className='w-100 rounded-2'/>
        </div>
      </div>
      <div className="col-md-4">
        <div className='rounded-2'>
          <img src={pic3} alt='' className='w-100 rounded-2'/>
        </div>
      </div>
      <div className="col-md-4">
        <div className='rounded-2'>
          <img src={pic1} alt='' className='w-100 rounded-2'/>
        </div>
      </div>
      <div className="col-md-4">
        <div className='rounded-2'>
          <img src={pic2} alt='' className='w-100 rounded-2'/>
        </div>
      </div>
      <div className="col-md-4">
        <div className='rounded-2'>
          <img src={pic3} alt='' className='w-100 rounded-2'/>
        </div>
      </div>
     </div>


      </div>
  )
}
