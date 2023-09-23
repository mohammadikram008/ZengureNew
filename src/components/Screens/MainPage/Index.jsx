import React, { Fragment, useState } from 'react'
import './MainStyle.css'
import { Link } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
// import heading from './heading.png'
// import group48 from './group48.png'
// import maskgroup from './maskgroup.png'
// import image14 from './image14.png'
// import image9 from './image9.png'
import arrow1 from './Arrow1.png'
// import group35076 from './group35076.png'
import group35078 from './Group35078.png'
import image3 from './image3.png'
import image23 from './image23.png'
import image24 from './image24.png'
import image26 from './image26.png'
import image28 from './image28.png'
import image29 from './image29.png'
import image30 from './image30.png'
import image47 from './image47.png'
import advertis from './advertise.png'
import portrait from './portrait.png'
import image20 from './image20.png'
import image25 from './image25.png'
import image9 from './image9.png'
import image22 from './image22.png'
import image37 from './image37.png'
import image33 from './image 33.png'
import group35076 from './Group 35076.png'
import group35081 from './Group 35081.png'
import group35061 from './Group 35061.png'
import pencil from './pencil.png'
import group48 from './Group48.png'
import rectangle49 from './Rectangle 49.png'
import rectangle50 from './Rectangle 50.png'
import rectangle51 from './Rectangle 51.png'
import rectangle55 from './Rectangle 55.png'
import rectangle56 from './Rectangle 56.png'
import rectangle57 from './Rectangle 57.png'
import rectangle28 from './Rectangle 28.png'
import ellipse46 from './Ellipse 46.png'
import ellipse40 from './Ellipse 40.png'
import { Row, Col } from 'reactstrap';
import Faq from '../FAQ/Index'
import Footer from '../Footer/Index'
const Index = () => {
  const openWhatsAppChat = () => {
    const phoneNumber = '+923357944011'; // Replace with your WhatsApp phone number

    // Construct the WhatsApp chat URL
    const url = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp chat in a new tab
    window.open(url, '_blank');
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const faqData = [
    {
      question: 'What is web development and design?',
      answer: 'Web development and design encompass the creation and design of websites or web applications. Development involves coding, programming, and server-side work, while design focuses on the visual layout, user interface (UI), and user experience (UX) of the site.',
    },
    {
      question: 'Why do I need a professional web development and design service?',
      answer: 'Engaging a professional service like Zengur ensures your website is built with expertise, adheres to best practices, is visually appealing, user- friendly, and functional across various devices and browsers.We can assist you in achieving your business goals and establishing a robust online presence.',
    },
    {
      question: ' What is the typical process for a web development and design project?',
      answer: 'The typical process involves stages such as discovery and planning, design mockups or wireframes, development and coding, testing, client feedback, revisions, and ultimately, the websites launch.The specific steps may vary based on the project scope and the level of client interaction.',
    },
    {
      question: 'How long does it take to complete a web development project?',
      answer: 'Project duration varies depending on factors such as project complexity, required features, and collaboration efficiency. While a simple website might take a few weeks, a more intricate web application could extend over several months.',
    },
    {
      question: 'What is responsive design, and why is it important?',
      answer: 'Responsive design ensures optimal website appearance and functionality across diverse screen sizes, from desktop monitors to mobile devices. Its importance lies in providing a consistent user experience and enhancing search engine rankings.',
    },
    // Add more FAQ items as needed
  ];


  return (
    <Fragment>
      <div className="home-page-DARK-MODE">



        {/* whychoose us section */}
        <div className='whychooseus'>
          <h1>Why Choose Us</h1>
          <p>Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin consepus vulputate Felis ornare posuere d</p>
        </div>
        <Row className='m-0'>
          <Col md='3'></Col>
          <Col md='2'>
            <div className='whychooseus-card'>
              <img src={image25} alt='image' />
              <h5>Creative and innovative designs</h5>
              <p>Felis ornare posuere dignissim dictum nulla tempus vulputate. facus eu proin consepus </p>
            </div>

          </Col>
          <Col md='2'>
            <div className='whychooseus-card'>
              <img src={image29} alt='image' />
              <h5>Creative and innovative designs</h5>
              <p>Felis ornare posuere dignissim dictum nulla tempus vulputate. facus eu proin consepus </p>
            </div>

          </Col>
          <Col md='2'>
            <div className='whychooseus-card'>
              <img src={image26} alt='image' />
              <h5>Creative and innovative designs</h5>
              <p>Felis ornare posuere dignissim dictum nulla tempus vulputate. facus eu proin consepus </p>
            </div>

          </Col>
          <Col md='3'></Col>
        </Row>
        <Row className='m-0'>
          <Col md='4'></Col>
          <Col md='2'>
            <div className='whychooseus-card'>
              <img src={image28} alt='image' />
              <h5>Creative and innovative designs</h5>
              <p>Felis ornare posuere dignissim dictum nulla tempus vulputate. facus eu proin consepus </p>
            </div>
          </Col>
          <Col md='2'>
            <div className='whychooseus-card'>
              <img src={image30} alt='image' />
              <h5>Creative and innovative designs</h5>
              <p>Felis ornare posuere dignissim dictum nulla tempus vulputate. facus eu proin consepus </p>
            </div>
          </Col>
          <Col md='4'></Col>
        </Row>


        {/* Our Services section */}
        <Row className='m-0 mt-5' >

          <Col md='1'></Col>
          <Col md='10' className='ourservice-col'>
            <Row className='m-0'>
              <Col md='3'>
                <div className='col-services-inner'>
                  <h5>Our Services</h5>
                  <p>Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin consepus vulputate Felis ornare </p>
                  <div><span>See more</span> <img src={arrow1} alt="" /></div>
                </div>
              </Col>
              <Col md='3'>
                <div className='col-services-inner-grphic'>
                  <div className='service-image-div'>
                    <img src={pencil} alt='image' />
                  </div>
                  <h5>Graphic Desiging </h5>
                  <p>Branding & Design services are people’s view </p>
                  <div><span>Read more</span> <img src={arrow1} alt="" /></div>
                </div>
              </Col>
              <Col md='3' >
                <div className='col-services-inner-grphic'>
                  <div className='service-image-div'>
                    <img src={image22} alt='image' />
                  </div>
                  <h5>Web Developement</h5>
                  <p>At Zengur, we blend creativity  to craft website.</p>
                  <div><span>Read more</span> <img src={arrow1} alt="" /></div>
                </div>
              </Col>
              <Col md='3'>
                <div className='col-services-inner-grphic'>
                  <div className='service-image-div'>
                    <img src={image33} alt='image' />
                  </div>
                  <h5>SEO </h5>
                  <p>Boost your online visibility with our SEO services. </p>
                  <div><span>Read more</span> <img src={arrow1} alt="" /></div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md='1'></Col>


        </Row>
        
        {/* About us Section */}
        <div className='aboutus-mian-row'>
     
          <Row className='m-0 '>
            <Col md='6'>
              <img className='img-elips-aboutus' src={ellipse46} />
              <div className='portfolio-heading-div'>
                <img className='group35081' src={group35081} />
                <h1>About Us</h1>
                <p>At Zengur, we are more than just a web development and design agency – we are your trusted partner in leveraging the digital landscape to elevate your business. With a passion for innovation and a commitment to excellence, we specialize in delivering tailored solutions for a wide spectrum of industries, including e-commerce, real estate, accounting firms, education, and blockchain technology.</p>
              </div>
            </Col>
            <Col md='6' className='aboutus-col'>
              <div className="box">
                <div className="group">
                  <div className="overlap-group">
                    <div className="image" />
                    <img className="img" alt="Image" src={image20} />

                  </div>
                </div>
              </div>
              <div className="box-circle">
                <div className="ellipse-circle" />
              </div>
            </Col>
          </Row>
        </div>
        
        {/* our Process Section */}
        <img className='group35061' src={group35061} />
        <img className='elipse40' src={ellipse40} />
        <Row className='m-0 p-0 '>
          <Col md='6'>
            <div className='our-process-mian-div'>
              <div className='our-process-inner-div'></div>
              <img className='img-elipss' src={ellipse46} />

              <div className='our-process-row'>
                <Row>
                  <Col md='6'></Col>
                  <Col md='6'>
                    <Row>
                      <Col md='6'>
                        <div className="our-process-inner-col">
                          <img src={pencil} alt='image' />
                          <p>Design and Mockup Creation </p>
                          <div className='readmore'>Read more <img src={arrow1} alt="" /></div>
                        </div>
                      </Col>
                      <Col md='6'>
                        <div className='our-process-inner-col'>
                          <img src={pencil} alt='image' />
                          <p>Develoment and Coding </p>
                          <div className='readmore'>Read more <img src={arrow1} alt="" /></div>
                        </div>
                      </Col>
                      <Col md='6'>
                        <div className='our-process-inner-col'>
                          <img src={pencil} alt='image' />
                          <p>Testing and Quality assurance </p>
                          <div className='readmore'>Read more <img src={arrow1} alt="" /></div>
                        </div>
                      </Col>
                      <Col md='6'>
                        <div className='our-process-inner-col'>
                          <img src={pencil} alt='image' />
                          <p>Client feedback and revisions</p>
                          <div className='readmore'>Read more <img src={arrow1} alt="" /></div>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                </Row>
              </div>
            </div>

          </Col>
          <Col md='6'>
            <div className='our-process-heading'>
              <h5>Our Process</h5>
              <p>Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin consepus vulputate Felis ornare </p>
              <div><span>See more</span> <img src={arrow1} alt="" /></div>
            </div>
          </Col>
        </Row>

        <Row className='m-0 our-process-mian-row'>
          <div className='portfolio-heading-div'>
            <h1>Company Portfolio</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  exercitationem nisi voluptas ex, laborum sequi pariatur, eligendi porro error culpa quae! Rem, mollitia quam.</p>
          </div>
          <Col md='1'></Col>
          <Col md='10'>
            <Row className=' ourprocess-main'>
              <Col md='3'>
                <img className='img-49' src={rectangle49} alt="" />
              </Col>
              <Col md='4'>
                <img className='img-49' src={rectangle50} alt="" />
              </Col>
              <Col md='5'>
                <img className='img-49' src={rectangle51} alt="" />
              </Col>
            </Row>
            <Row className='ourprocess-main'>
              <Col md='3'>
                <img className='img-49' src={rectangle55} alt="" />
              </Col>
              <Col md='5'>
                <img className='img-49' src={rectangle56} alt="" />
              </Col>
              <Col md='4'>
                <img className='img-49' src={rectangle57} alt="" />
              </Col>
            </Row>
            <div className='company-portfolio-seemore'>
              <div className='seemore-div-com'>

                <span>See more</span> <img src={arrow1} alt="" />
              </div>
            </div>
          </Col>
          <Col md='1'></Col>
        </Row>
        {/* Contactus section */}

        <Row className='m-0 row-contact-us-topAll'>
          <Col md='1'></Col>
          <Col md='10' className='contact-main-col mt-5'>

            <img src={advertis} className='adverties-img' />


            <div className='contactus-heading'>
              <span>Contact Us</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo.</p>
              <div className='input-div-contactus'>
                <input type='text' placeholder='Email' />
                <button>Send</button>
              </div>


            </div>


          </Col>
          <Col md='1'></Col>
        </Row>
        <Faq />
        <Footer />


        {/* <Footer/> */}

        {/* <div className="div">
          <div className="overlap">
           
            <img src={rectangle28} className='rectangle-2'/>
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <img className="group" alt="Group" src={group35076} />
            <button className="frame">
              <div className="text-wrapper">Get In Touch</div>
              <img className="arrow" alt="Arrow" src={arrow1} />
            </button>
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="overlap-group-2">
                  <img
                    className="give-your-business-a"
                    alt="Give your business a"
                    src={group35078}
                  />
                  
                </div>
              </div>
            </div>
            <div className="group-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />

            <div className="overlap-group-wrapper">
              <div className="overlap-2">
                <img className="rectangle-5" alt="Group" src={group48} />
              </div>
            </div>
            <img className="image" alt="Image" src={image9} />
            <img className="image-2" alt="Image" src={image47} />
            <div className="div-wrapper">
              <div className="overlap-3">
                <div className="overlap-group-3">
                  <div className="text-wrapper-3">120K +</div>
                </div>
                <div className="text-wrapper-4">Project Completed</div>
              </div>
            </div>
            <div className="ellipse-6" />
            <div className="ellipse-7" />
            <div className="ellipse-8" />
            <div className="group-5">
              <div className="group-6">
                <p className="text-wrapper-5">
                Choose us for our proven expertise and track record of delivering tailored, cutting-edge solutions that drive success.
                </p>
                <div className="text-wrapper-6">Why Choose Us</div>
              </div>
              <div className="frame-2">
                <div className="frame-3">
                  <div className="group-7">
                    <div className="overlap-group-4">
                      <img className="image-3" alt="Image" src={image25} />
                      <p className="text-wrapper-7">
                      Creative and innovative designs captivate the viewer's imagination
                      </p>
                      <div className="text-wrapper-8">Creative and innovative designs</div>
                    </div>
                  </div>
                  <div className="group-7">
                    <div className="overlap-group-4">
                      <p className="text-wrapper-9">
                      An attention to detail and a user-centric approach form the cornerstone of effective design.
                      </p>
                      <img className="image-4" alt="Image" src={image29} />
                      <p className="text-wrapper-8">Attention to detail and user-centric approach</p>
                    </div>
                  </div>
                  <div className="group-8">
                    <div className="overlap-group-4">
                      <p className="text-wrapper-10">
                      Timely project delivery ensures that goals are met, resources are optimized
                      </p>
                      <img className="image-5" alt="Image" src={image26} />
                      <div className="text-wrapper-11">Timely projects delivery</div>
                    </div>
                  </div>
                </div>
                <div className="frame-3">
                  <div className="group-7">
                    <div className="overlap-group-4">
                      <p className="text-wrapper-7">
                      Transparent communication and collaboration foster trust and synergy among team members.
                      </p>
                      <div className="text-wrapper-12">Transparent communication collaboration</div>
                      <img className="image-3" alt="Image" src={image28} />
                    </div>
                  </div>
                  <div className="group-8">
                    <div className="overlap-group-4">
                      <p className="text-wrapper-7">
                      Client satisfaction and testimonials are powerful indicators of a design's success.
                      </p>
                      <div className="text-wrapper-12">Client satisfaction and Testimonials</div>
                      <img className="image-6" alt="Image" src={image30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="portrait-attractive"
              alt="Portrait attractive"
              src={portrait} />

            <div className="group-9">
              <div className="overlap-6">
                <div className="overlap-group-5">
                  <div className="text-wrapper-13">180K +</div>
                </div>
                <div className="text-wrapper-14">Happy Client</div>
              </div>
            </div>
          </div>
          <div className="overlap-7">
            <div className="overlap-8">
              <div className="rectangle-6" />
              <div className="rectangle-7" />
              <div className="group-10">
                <div className="frame-4">
                  <div className="frame-5">
                    <div className="text-wrapper-15">Our Services</div>
                    <p className="text-wrapper-16">
                    Our services encompass comprehensive Web,graphic designing and SEO solutions, empowering your brand with captivating visuals and enhanced online visibility.
                    </p>
                  </div>
                  <div className="frame-6">
                    <div className="text-wrapper-17">See More</div>
                    <img className="arrow-3" alt="Arrow" src={arrow1} />
                  </div>
                </div>
                <Link to='/graphic'>
                <div className="group-wrapper">
                  <div className="group-11">
                    <div className="group-12">
                      <div className="frame-7">
                        <div className="text-wrapper-17">Read More</div>
                        <img className="arrow-3" alt="Arrow" src={arrow1} />
                      </div>
                      <div className="rectangle-8" />
                      <div className="text-wrapper-18">Graphic Designing</div>
                      <p className="branding-design">Branding &amp; Design services are people’s view</p>
                    </div>
                  </div>
                </div>
                </Link>
                <Link to='/webdev'>
                <div className="group-wrapper2">
                  <div className="group-11">
                    <div className="group-12">
                      <div className="frame-7">
                        <div className="text-wrapper-17">Read More</div>
                        <img className="arrow-3" alt="Arrow" src={arrow1} />
                      </div>
                      <div className="rectangle-8" />
                      <div className="text-wrapper-18">Web Development</div>
                      <p className="branding-design">At Zengur, we blend creativity and technology to craft website.</p>
                    </div>
                  </div>
                </div>
                </Link>
                <Link to='/seo'>
                <div className="group-wrapper3">
                  <div className="group-11">
                    <div className="group-12">
                      <div className="frame-7">
                        <div className="text-wrapper-17">Read More</div>
                        <img className="arrow-3" alt="Arrow" src={arrow1} />
                      </div>
                      <div className="rectangle-8" />
                      <div className="text-wrapper-18">SEO</div>
                      <p className="branding-design">Boost your online visibility with our SEO services.</p>
                    </div>
                  </div>
                </div>
                </Link>
                
              </div>
              <div className="ellipse-9" />
              <div className="group-15">
                <div className="frame-10">
                  <p className="text-wrapper-23">
                    At Zengur, we are more than just a web development and design agency – we are your trusted partner in
                    leveraging the digital landscape to elevate your business. With a passion for innovation and a
                    commitment to excellence, we specialize in delivering tailored solutions for a wide spectrum of
                    industries, including e-commerce, real estate, accounting firms, education, and blockchain technology.
                  </p>
                </div>
                <div className="frame-11">
                  <div className="text-wrapper-17">Read More</div>
                  <img className="arrow-3" alt="Arrow" src={arrow1} />
                </div>
              </div>
              <div className="text-wrapper-24">About Us</div>
              <div className="group-16">
                <div className="overlap-9">
                  <div className="image-7" />
                  <img className="image-8" alt="Image" src={image20} />
                </div>
              </div>
              <img className="group-17" alt="Group" src={group35081} />
              <div className="rectangle-11" />
              <div className="rectangle-12" />
              <img className="group-18" alt="Group" src={group35061} />
              <div className="ellipse-10" />
              <div className="ellipse-11" />
              <div className="ellipse-12" />
              <div className="ellipse-13" />
              <div className="group-19">
                <div className="group-20">
                  <div className="frame-10">
                    <div className="text-wrapper-15">Our Process</div>
                    <p className="text-wrapper-25">
                    Our process is streamlined, beginning with a thorough consultation to understand your goals, followed by a tailored strategy development, and culminating in meticulous execution and ongoing optimization for optimal results.
                    </p>
                  </div>
                  <div className="frame-12">
                    <div className="text-wrapper-17">Read More</div>
                    <img className="arrow-3" alt="Arrow" src={arrow1} />
                  </div>
                </div>
                <div className="overlap-10">
                  <div className="rectangle-13" />
                  <div className="rectangle-14" />
                  <div className="text-wrapper-26">Design and Mockup Creation</div>
                  <div className="frame-13">
                    <div className="text-wrapper-17">Read More</div>
                    <img className="arrow-3" alt="Arrow" src={arrow1}/>
                  </div>
                  <div className="group-21">
                    <div className="overlap-group-6">
                      <div className="text-wrapper-27">Testing and Quality assurance</div>
                      <div className="frame-14">
                        <div className="text-wrapper-17">Read More</div>
                        <img className="arrow-3" alt="Arrow" src={arrow1} />
                      </div>
                    </div>
                  </div>
                  <div className="group-22">
                    <div className="overlap-group-6">
                      <div className="overlap-group-7">
                        <div className="text-wrapper-28">Development and Coding</div>
                         </div>
                      <div className="frame-14">
                        <div className="text-wrapper-17">Read More</div>
                        <img className="arrow-3" alt="Arrow" src={arrow1} />
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-29">Development and Coding</div>
                  <div className="group-23">
                    <div className="overlap-group-6">
                      <div className="text-wrapper-30">Client feedback and revisions</div>
                      <div className="frame-14">
                        <div className="text-wrapper-17">Read More</div>
                        <img className="arrow-3" alt="Arrow" src={arrow1} />
                      </div>
                    </div>
                  </div>
                  <img className="pencil-ruler" alt="Pencil ruler" src={pencil} />
                  <img className="image-9" alt="Image" src={image22} />
                  <img className="image-10" alt="Image" src={image23} />
                  <img className="image-11" alt="Image" src={image24} />
                </div>
              </div>
              <button className="frame-15">
                <div className="text-wrapper-17">See More</div>
                <img className="arrow-3" alt="Arrow" src={arrow1} />
              </button>
              <p className="text-wrapper-31">
                Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin consepus vulputate Felis
                ornare posuere dignissim
              </p>
              <div className="text-wrapper-32">Company Portfolio</div>
              <div className="ellipse-14" />
              <img className="rectangle-15" alt="Rectangle" src={rectangle49} />
              <img className="rectangle-16" alt="Rectangle" src={rectangle55} />
              <img className="rectangle-17" alt="Rectangle" src={rectangle50} />
              <img className="rectangle-18" alt="Rectangle" src={rectangle56} />
              <img className="rectangle-19" alt="Rectangle" src={rectangle51} />
              <img className="rectangle-20" alt="Rectangle" src={rectangle57} />
              <img className="pencil-ruler-2" alt="Pencil ruler" src={pencil} />
              <img className="image-12" alt="Image" src={image22} />
              <img className="image-33" alt="Image" src={image33} />
               </div>
            <div className="overlap-11">
              <div className="group-24">
                <div className="overlap-12">
                  <div className="overlap-13">
                    <div className="ellipse-15" />
                    <div className="frame-16">
                      <div className="overlap-group-8">
                        <div className="frame-17">
                          <div className="text-wrapper-15">Contact Us</div>
                          <p className="text-wrapper-33">
                            Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin consepus vul
                          </p>
                        </div>
                        <div className="ellipse-16" />
                      </div>
                      <div className="overlap-14">
                        <div class="container">
                          <input type="text" placeholder="Email" name='email' />
                          <button className="frame-18">Submit</button>
                        </div>
                       
                      </div>
                      <div className="ellipse-17" />
                      <div className="ellipse-18" />
                    </div>
                  </div>

                  <div className="group-25">
                    <div className="faq-section">
                      <div className='faq-heading'>

                        <h5 className="faq-title">FAQ</h5>
                      </div>
                      <div className="faq-list">
                        {faqData.map((item, index) => (
                          <div key={index} className="faq-item">
                            <div className="question" onClick={() => handleToggle(index)}>
                              <span className="question-text">{item.question}</span>
                              <button className="toggle-button">
                                {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                              </button>
                            </div>
                            {activeIndex === index && (
                              <div className="answer">
                                <p>{item.answer}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                    </div>
                    
                  </div>
                </div>
                <img className="image-13" alt="Image" src="image-18.png" />
                <div className="overlap-15">
                  <img className="vector-3" alt="Vector" src="vector-7.svg" />
                  <img className="image-14" alt="Image" src={image3} />
                  <p className="text-wrapper-40">
                    Felis ornare posuere dignissim dictum nulla tempus vulputate. Est facus eu proin
                  </p>
                  <div className="text-wrapper-41">@ Copyright 2023</div>
                  <div className="frame-24">
                    <div className="text-wrapper-42"><Link to='/' className='nav-item-link'>Home</Link> </div>
                    <div className="text-wrapper-42"> <Link to='/ourservices' className='nav-item-link'>Services</Link></div>
                    <div className="text-wrapper-42"> <Link to='/aboutus' className='nav-item-link'>AboutUs</Link></div>
                    <div className="text-wrapper-42"> <Link to='/contactus' className='nav-item-link'>ContactUs</Link></div>
                    <div className="text-wrapper-42"><Link to='/' className='nav-item-link'>FAQ</Link></div>
                  </div>
                </div>
              </div>
              <div className="ellipse-19" />
              <img
                className="advertising-concept"
                alt="Advertising concept"
                src={advertis} />
            </div>
            <img className="ellipse-20" alt="Ellipse" src={ellipse46} />
          </div>
         
        </div> */}

      </div>
    </Fragment >
  )
}

export default Index