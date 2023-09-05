import React, { Fragment } from 'react'
import './Aboutus.css'
import image20 from './image20.png'
import image37 from './image37.png'
import image39 from './image39.png'
import arrow from './Arrow1.png'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
const Index = () => {
  return (
    <Fragment>
        <div className="about-us">
      <div className="div">
        <div className="overlap">
          {/* <div className="rectangle" /> */}
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          {/* <img className="group" alt="Group" src="group-35076.png" /> */}
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="ellipse-6" />
          <div className="group-2">
            <div className="frame-102">
              <p className="text-wrapper">
                At Zengur, we are more than just a web development and design agency – we are your trusted partner in
                leveraging the digital landscape to elevate your business. With a passion for innovation and a
                commitment to excellence, we specialize in delivering tailored solutions for a wide spectrum of
                industries, including e-commerce, real estate, accounting firms, education, and blockchain technology.
              </p>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-2">Read More</div>
              <img className="arrow" alt="Arrow" src={arrow} />
            </div>
          </div>
          <p className="zengur-s-mission-is">
            Zengur&#39;s mission is to create innovative digital solutions that empower businesses and individuals to
            thrive in the ever-evolving digital landscape. Through a commitment to excellence, collaboration, and
            cutting-edge technology, we aim to elevate our clients&#39; online presence and help them achieve their
            unique objectives.
          </p>
          <p className="innovation-we">
            Innovation: We embrace creativity and stay at the forefront of technological advancements to deliver
            forward-thinking solutions. Collaboration: Building strong partnerships, we work closely with our clients to
            co-create impactful results. Client-Centric: Our clients&#39; needs drive everything we do, and we tailor
            our solutions to their goals.
          </p>
          <div className="text-wrapper-3">About Us</div>
          <div className="text-wrapper-4">Mission</div>
          <div className="text-wrapper-5">Value</div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="image" src={image39} />
              <img className="img" alt="Image" src={image20} />
            </div>
          </div>
          <img className="image-2" alt="Image" src={image37} />
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              {/* <img className="vector" alt="Vector" src="vector-7.svg" /> */}
              <img className="image-3" alt="Image" src={logo} />
              <p className="p">Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin</p>
              <div className="text-wrapper-6">@ Copyright 2023</div>
              <div className="frame-3">
                <div className="text-wrapper-7"><Link to='/' className='nav-item-link'>Home</Link> </div>
                <div className="text-wrapper-7"> <Link to='/ourservices' className='nav-item-link'>Services</Link></div>
                <div className="text-wrapper-7"> <Link to='/aboutus' className='nav-item-link'>AboutUs</Link></div>
                <div className="text-wrapper-7"> <Link to='/contactus' className='nav-item-link'>ContactUs</Link></div>
                <div className="text-wrapper-7"><Link to='/' className='nav-item-link'>FAQ</Link></div>
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