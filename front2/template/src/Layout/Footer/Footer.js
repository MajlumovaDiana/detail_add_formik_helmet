import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"
function Footer() {
  return (
    <div className='footer'>
      <div className='footer_textAndLine'>
        <hr/>
            <div className='footerText'><p> Copyright ©2023 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <Link to={"https://colorlib.com/"}>Colorlib</Link></p></div>
      </div>
    </div>
  )
}

export default Footer
