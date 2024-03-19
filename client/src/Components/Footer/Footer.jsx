import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import pinterest from '../Assets/pinterest.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=""/>
        </div>
        <ul className='footer-links'>
            <li>
                Publisher
            </li>
            <li>
                Author
            </li>
            <li>
                Books
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                <img src={facebook} alt=""/>
            </div>
            <div className='footer-icon-container'>
                <img src={instagram} alt=""/>
            </div>
            <div className='footer-icon-container'>
                <img src={pinterest} alt=""/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright © 2024 SmartBook</p>
        </div>
    </div>
  )
}

export default Footer
