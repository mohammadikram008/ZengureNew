import React, { Fragment } from 'react'
import './Contactus.css'
import bg_img from './image36.png'
import Footer from '../Footer/Index'
const Index = () => {
  return (
 <Fragment>
   <div className="contact-form">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <img className="image" alt="Image" src={bg_img} />
          {/* <img className="group" alt="Group" src="group-35076.png" /> */}
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <p className="text-wrapper">Let Us Know You Better</p>
          <div className="group-2">
            <div className="frame">
              <div className="text-wrapper-2">Name</div>
              <div className="rectangle-2" />
            </div>
            <div className="frame-2">
              <div className="text-wrapper-2">Email</div>
              <div className="rectangle-2" />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-2">Contact</div>
              <div className="rectangle-2" />
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">Send Message</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <img className="vector" alt="Vector" src="vector-7.svg" />
              <img className="img" alt="Image" src="image-40.png" />
              <p className="p">Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin</p>
              <div className="text-wrapper-4">@ Copyright 2023</div>
              <div className="frame-4">
                <div className="text-wrapper-2">Home</div>
                <div className="text-wrapper-2">Services</div>
                <div className="text-wrapper-2">About Us</div>
                <div className="text-wrapper-2">Contact Us</div>
                <div className="text-wrapper-2">FAQ</div>
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
