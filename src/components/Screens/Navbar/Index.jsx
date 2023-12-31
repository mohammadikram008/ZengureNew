import React, { Fragment, useState } from 'react'
import zengurtext from '../../assets/images/zengurtext.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Index = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    const toggleNavbar = () => {
        console.log(isOpen)
        if(!isOpen){
            setIsOpen(true);
           
            
        }else{
            setIsOpen(false);
        }
    };
    const closeMenu = () => {
        setIsOpen(false);
      };
    return (
        <Fragment>
            <div className="group-40">
                <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                    <div className="navbar-toggle" onClick={toggleNavbar}>
                        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    </div>
                    {
                       isOpen && isOpen ?
                        <ul className={` nav-item navbar-menu `}>
                        <li><Link to='/' className='nav-item-link'  onClick={closeMenu}>Home</Link></li>
                        <li> <Link to='/ourservices' className='nav-item-link'  onClick={closeMenu}>Services</Link></li>
                        <li><Link to='/aboutus' className='nav-item-link'  onClick={closeMenu}>AboutUs</Link></li>
                        {/* <li className='logo-name'>zengur</li> */}
                        <li><img src={zengurtext}></img></li>
                        <li><Link to='/contactus' className='nav-item-link'  onClick={closeMenu}>ContactUs</Link></li>
                        <li><Link to='/faq' className='nav-item-link'  onClick={closeMenu}>FAQ</Link></li>
                        <Link to='/contactus' className='nav-item-link'>
                            <div className="frame">
                                <div className="text-wrapper"  onClick={closeMenu}> Request Quote
                                </div>
                            </div>
                        </Link>
                        
                    </ul>
                    :
                    ""
                    }
                    <ul className={`main-Navbar `}>
                    <li><Link to='/' className='nav-item-link'  >Home</Link></li>
                    <li> <Link to='/ourservices' className='nav-item-link'  >Services</Link></li>
                    <li><Link to='/aboutus' className='nav-item-link'  >AboutUs</Link></li>
                    {/* <li className='logo-name'>zengur</li> */}
                    <li><img src={zengurtext}></img></li>
                    <li><Link to='/contactus' className='nav-item-link'  >ContactUs</Link></li>
                    <li><Link to='/faq' className='nav-item-link'  >FAQ</Link></li>
                    <Link to='/contactus' className='nav-item-link'>
                        <div className="frame">
                            <div className="text-wrapper"  > Request Quote
                            </div>
                        </div>
                    </Link>
                    
                </ul>
                   
                </nav>
            </div>
        </Fragment>
    )
}
export default Index