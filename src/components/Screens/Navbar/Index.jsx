import React, { Fragment } from 'react'
import zengurtext from '../../assets/images/zengurtext.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Index = () => {
    return (
        <Fragment>
            <div className="group-40">
                <ul className='nav-item'>
                    <li><Link to='/' className='nav-item-link'>Home</Link></li>
                    <li> <Link to='/ourservices' className='nav-item-link'>Services</Link></li>
                    <li><Link to='/aboutus' className='nav-item-link'>AboutUs</Link></li>
                    {/* <li className='logo-name'>zengur</li> */}
                    <li><img src={zengurtext}></img></li>
                    <li><Link to='/contactus' className='nav-item-link'>ContactUs</Link></li>
                    <li><Link to='/' className='nav-item-link'>FAQ</Link></li>
                    <Link to='/contactus' className='nav-item-link'>
                    <div className="frame">
                        <div className="text-wrapper"> Request Quote
                        </div>
                    </div>
                        </Link>
                    {/* <div class="frame-26">
                        <div class="text-wrapper-46"><Link to='/' className='nav-item-link'>Request Quote</Link></div>
                    </div> */}
                </ul>
            </div>
        </Fragment>
    )
}
export default Index