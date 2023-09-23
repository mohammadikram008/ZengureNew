import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import './OurServices.css'
import  image22 from './image22.png'
import image34 from './image34.png'
import pencil from './pencil-ruler.png'
import arrow from './Arrow1.png'
import Footer from '../Footer/Index'
import logo from '../../assets/images/logo.png'

import arrow1 from '../../../components/assets/images/Arrow1.png'
import { Col, Row } from 'reactstrap'
const Index = () => {
  return (
   <Fragment>
    
    <Row className='m-0'>
    <div className='ourservice-heading-div'>
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  exercitationem nisi voluptas ex, laborum sequi pariatur, eligendi porro error culpa quae! Rem, mollitia quam.</p>
          </div>
          <Col md='2'></Col>
          <Col md='3'>
          <div className='col-ourservices-inner-grphic'>
                  <div className='service-image-div'>
                    <img src={pencil} alt='image' />
                  </div>
                  <h5>Graphic Desiging </h5>
                  <p>Branding & Design services are people’s view </p>
                  <div><span>Read more</span> <img src={arrow1} alt="" /></div>
                </div>
          </Col>
          <Col md='3'>
          <div className='col-ourservices-inner-grphic'>
                  <div className='service-image-div'>
                    <img src={pencil} alt='image' />
                  </div>
                  <h5>Graphic Desiging </h5>
                  <p>Branding & Design services are people’s view </p>
                  <div><span>Read more</span> <img src={arrow1} alt="" /></div>
                </div>
          </Col>
          <Col md='3'>
          <div className='col-ourservices-inner-grphic'>
                  <div className='service-image-div'>
                    <img src={pencil} alt='image' />
                  </div>
                  <h5>Graphic Desiging </h5>
                  <p>Branding & Design services are people’s view </p>
                  <div><span>Read more</span> <img src={arrow1} alt="" /></div>
                </div>
          </Col>
          <Col md='2'></Col>
    </Row>
    
   </Fragment>
  )
}

export default Index