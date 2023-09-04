import React, { Fragment } from 'react'
import './FooterStyle.css'
import logo from '../.././assets/FooterImage/logo.png'
const Index = () => {
  return (
   <Fragment>
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          {/* <img className="vector" alt="Vector" src="vector-7.svg" /> */}
          <div class="divider vector"></div>
          <img className="image" alt="Image" src={logo} />
          <p className="text-wrapper">
            Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin
          </p>
          <div className="div">@ Copyright 2023</div>
          <div className="navbar">
            <div className="text-wrapper-2">Home</div>
            <div className="text-wrapper-2">Services</div>
            <div className="text-wrapper-2">About Us</div>
            <div className="text-wrapper-2">Contact Us</div>
            <div className="text-wrapper-2">FAQ</div>
          </div>
        </div>
      </div>
    </div>
   </Fragment>
  )
}

export default Index