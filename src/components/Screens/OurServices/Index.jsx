import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './OurServices.css'
import image22 from './image22.png'
import image34 from './image34.png'
import pencil from './pencil-ruler.png'
import arrow from './Arrow1.png'
import Footer from '../Footer/Index'
import logo from '../../assets/images/logo.png'
import elipseleft from '../MainPage/Ellipse 46.png'
import elipseright from '../MainPage/Ellipse 40.png'
import arrow1 from '../../../components/assets/images/Arrow1.png'
import elipse47 from '../../assets/images/Ellipse 47.png'
import { Col, Row } from 'reactstrap'
import image33 from '../MainPage/image 33.png'
const Index = () => {
  return (
    <Fragment>
<div className='main-ourservice-div'>

        <img src={elipseleft} className='elispe-46'/>
      <Row className='m-0 '>
        <div className='ourservice-heading-div'>
          <h1>Our Services</h1>
          <p>Elevate your online presence with our expert services: graphic design, web development, and SEO.</p>
        </div>
        <Col md='2'></Col>
        <Col md='3'>
          <div className='col-ourservices-inner-grphic'>
            <div className='service-image-div'>
              <img src={pencil} alt='image' />
            </div>
            <h5>Graphic Desiging </h5>
            <p>Branding & Design services are people’s view and the perception that makes your business visible as well as reliable.  </p>
            <div className='rd-more'><span>Read more</span> <img src={arrow1} alt="" /></div>
          </div>
        </Col>
        <Col md='3'>
          <div className='col-ourservices-inner-grphic'>
            <div className='service-image-div'>
              <img src={image22} alt='image' />
            </div>
            <h5>Web Development </h5>
            <p>At Zengur, we blend creativity and technology to craft websites that make a lasting impact.</p>
            <div className='rd-more'><span>Read more</span> <img src={arrow1} alt="" /></div>
          </div>
        </Col>
        <Col md='3'>
          <div className='col-ourservices-inner-grphic'>
            <div className='service-image-div'>
              <img src={image33} alt='image' />
            </div>
            <h5>SEO Consultancy </h5>
            <p>Boost your online visibility with our SEO services. We optimize your website's content, technical aspects, and link  </p>
            <div className='rd-more'><span>Read more</span> <img src={arrow1} alt="" /></div>
          </div>
        </Col>
        <Col md='2'></Col>
      </Row>
      <img src={elipse47} className='elispe-47'/>
      <img src={elipseright} className='elispe-40'/>

</div>
    </Fragment>
  )
}

export default Index