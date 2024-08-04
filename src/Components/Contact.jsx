import React from 'react'

export default function Contact() {
  return (
    <div className='container text-center '>
      <h1 className='pt-5 fs-1 fw-bold text-dark'>CONTACT SECTION</h1>
      <div>
      <i className='fa-solid fa-star p-2 text-dark'> </i>
      <i className='fa-solid fa-star p-2 text-dark'> </i>
      <i className='fa-solid fa-star p-2 text-dark'> </i>
      </div>
      
      <form className='py-5 d-flex flex-column justify-content-center align-items-center'>
        <input type='text' placeholder='userName' className='my-4 w-50 p-2 border-bottom border-success'/>
        <input type='text' placeholder='userAge' className='my-4 w-50 p-2 border-bottom border-success'/>
        <input type='email' placeholder='userEmail' className='my-4 w-50 p-2 border-bottom border-success'/>
        <input type='password' placeholder='userPassword' className='my-4 w-50 p-2 border-bottom border-success'/>
        <button className='my-4 w-25 p-3 text-white border rounded-2 bg-green'>Send Message</button>
      </form>

      
      </div>
  )
}
