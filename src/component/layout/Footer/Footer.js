import React from 'react'

import playStore from '../../../images/playstore.png'
import appStore from '../../../images/Appstore.png'
import './Footer.css'

function Footer() {
  return (
    <footer id="footer">

        <div className='leftFooter'>
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="Playstore"/>
            <img src={appStore} alt="Appstore"/>

        </div>
        <div className='midFooter'>
            <h1>E-Commerce</h1>
            <p>High Quality is our first Priority</p>

            <p>Copyrights 2022 &copy; Muhammad Akram</p>
        </div>
        <div className='rightFooter'>
            <h4>Follow Us</h4>
            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer noopener" >Facebook</a>
            <a href='https://www.linkedin.com/in/muhammad-akram-677236187/' target="_blank" rel="noreferrer noopener">Linkedin</a>
            <a href='https://axiomworld.net/' target="_blank" rel="noreferrer noopener">Axiom World (Pvt) Ltd</a>
            
        </div>

    </footer>
  )
}

export default Footer