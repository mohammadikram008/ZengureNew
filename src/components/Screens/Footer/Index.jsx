import React, { Fragment } from 'react'
import './FooterStyle.css'
import logo from '../.././assets/FooterImage/logo.png'
import { Link } from 'react-router-dom'
const Index = () => {
  return (
   <Fragment>
       <div className="overlap-15">
          
          <img className="image-14" alt="Image" src={logo} />
          <p className="text-wrapper-40">
            Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin
          </p>
          <div className="frame-24">
            <div className="text-wrapper-42"><Link to='/' className='nav-item-link'>Home</Link> </div>
            <div className="text-wrapper-42"> <Link to='/ourservices' className='nav-item-link'>Services</Link></div>
            <div className="text-wrapper-42"> <Link to='/aboutus' className='nav-item-link'>AboutUs</Link></div>
            <div className="text-wrapper-42"> <Link to='/contactus' className='nav-item-link'>ContactUs</Link></div>
            <div className="text-wrapper-42"><Link to='/' className='nav-item-link'>FAQ</Link></div>
          </div>
          <div class="divider"></div>

          <div className="text-wrapper-41">@ Copyright 2023</div>
        </div>
   </Fragment>
  )
}

export default Index