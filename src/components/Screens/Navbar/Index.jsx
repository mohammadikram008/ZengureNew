import React, { Fragment } from 'react'
import zengurtext from '../../assets/images/zengurtext.png'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Index = () => {
    return (
        <Fragment>
            <div className="group-40">
                <ul className='nav-item'>
                    <li><Link to='/' className='nav-item-link'>HOME</Link></li>
                    <li> <Link to='/' className='nav-item-link'>SERVICE</Link></li>
                    <li><Link to='/' className='nav-item-link'>ABOUTUS</Link></li>
                    {/* <li className='logo-name'>zengur</li> */}
                    <li><img src={zengurtext}></img></li>
                    <li><Link to='/' className='nav-item-link'>CONTACTUS</Link></li>
                    <li><Link to='/' className='nav-item-link'>FAQ</Link>FAQ</li>
                    <div class="frame-26">
                        <div class="text-wrapper-46"><Link to='/' className='nav-item-link'>Request Quote</Link></div>
                    </div>
                </ul>
            </div>
        </Fragment>
    )
}
export default Index