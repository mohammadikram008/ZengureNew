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
          Dive into our portfolio to witness a rich tapestry of successful endeavors, showcasing our versatile skills and creative prowess.
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