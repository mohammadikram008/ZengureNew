import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Contactus.css'
import bg_img from '../../assets/images/image36.png'
import logo from '../../assets/images/logo.png'
import ellipse34 from './Ellipse 34.png'
import ellipse47 from './Ellipse 47.png'
import Footer from '../Footer/Index'
const Index = () => {
  return (
    <Fragment>
      <div className="contactus-form">
        <div className="div">
          <div className="overlap">
            {/* <div className="rectangle" /> */}
            <img className="image" alt="Image" src={bg_img} />
            {/* <img className="group" alt="Group" src="group-35076.png" /> */}
            <img src={ellipse34} className="ellipse" />
            <img src={ellipse47} className="ellipse-2" />
            <img src={ellipse34} className="ellipse-3" />
            <div className="ellipse-4" />
            <p className="text-wrapper">Let Us Know You Better</p>
            <div className="group-2">
              <div className="frame-199">
                <div className="text-wrapper-2">Name</div>
                <input name='name' type='text' className="rectangle-2" />
              </div>
              <div className="frame-2">
                <div className="text-wrapper-2">Email</div>
                <input name='name' type='email' className="rectangle-2" />
              </div>
              <div className="frame-3">
                <div className="text-wrapper-2">Contact</div>
                <input name='name' type='text' className="rectangle-2" />
              </div>
              <button className="div-wrapper">
                <div className="text-wrapper-3">Send Message</div>
              </button>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <img className="vector" alt="Vector" src="vector-7.svg" />
                <img className="img" alt="Image" src={logo} />
                <p className="p">Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin</p>
                <div className="text-wrapper-4">@ Copyright 2023</div>
                <div className="frame-4">
                  <div className="text-wrapper-2"><Link to='/' className='nav-item-link'>Home</Link> </div>
                  <div className="text-wrapper-2"> <Link to='/ourservices' className='nav-item-link'>Services</Link></div>
                  <div className="text-wrapper-2"> <Link to='/aboutus' className='nav-item-link'>AboutUs</Link></div>
                  <div className="text-wrapper-2"> <Link to='/contactus' className='nav-item-link'>ContactUs</Link></div>
                  <div className="text-wrapper-2"><Link to='/' className='nav-item-link'>FAQ</Link></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Index
