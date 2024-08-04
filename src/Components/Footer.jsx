import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='d-flex bg-color align-items-center justify-content-center text-white py-4 px-5'>
      <div className="row text-center py-5">
        <div className="col-md-4">
          <div className='py-2'>
            <h3 className='fs-3 py-2'>LOCATION</h3>
            <p>2215 John Daniel Drive<br/>Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className='py-2'>
            <h3 className='fs-3 py-2'>AROUND THE WEB</h3>
            <a><i className='fa-brands fa-facebook p-2 border border-1 rounded-circle m-2'></i></a>
            <a><i className='fa-brands fa-twitter p-2 border border-1 rounded-circle m-2'></i></a>
            <a><i className='fa-brands fa-linkedin p-2 border border-1 rounded-circle m-2'></i></a>
            <a><i class="fa-solid fa-globe p-2 border border-1 rounded-circle m-2"></i> </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className='py-2 '>
            <h3 className='fs-3 py-2'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>
    <div className='text-white text-center bg-dark py-3'>
      <p>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
