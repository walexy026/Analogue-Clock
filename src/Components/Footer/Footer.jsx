import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        {/* <footer> */}
        <div className="footerLinks">
          <div className="links">
            <ul>
              <li> <a className="footerLogo" href="./index.html">Jadoo.</a>
                </li>
              <li><p> Book your trip in minute, get full
                Control for much longer.</p>
              </li>
            </ul>
          </div>
            <div className="links">
        <ul>
          <li> <a href="#">Company</a>  </li>
          <li>  <a href="#">About</a> </li>
          <li>  <a href="#">Careers</a></li>
          <li>  <a href="#">Mobile</a></li>
      
    </ul>
      </div>
      <div className="links">
        <ul>
          <li> <a href="./ContactUs/contactUs.html">Contact</a> </li>
           <li> <a href="#">Help/FAQ</a></li>
           <li> <a href="#">Press</a></li>
           <li> <a href="#">Affilates</a></li>
       
        </ul>
      </div>
      <div className="links">
        <ul>
            <li><a href="#">More</a> </li>
            <li><a href="#">Airlinefees</a></li>
           <li> <a href="#">Airline</a></li>
           <li> <a href="#">Low fare tips</a></li>
       
    </ul>
      </div>
      <div classNmae="links">
          <div className="socials">
              <a href="/https://facebook.com"><img src="./Assets/facebook.svg" alt="facebook" /></a>
               <a href="https://instagram.com"><img className="instagram" src="./Assets/instagram.svg" alt="instagram" /></a>
              <a href="https://twitter.com"><img src="./Assets/twitter.svg" alt="twitter" /></a>
            </div>
        <div><p>Discover our app</p></div>
        <div className="playStore">
          <a href="https://googleplay.com"><img src="./Assets/GooglePlay.svg" alt="GooglePlay" /></a>
          <a href="https://apps.apple.com"><img src="./Assets/applePlayStore.svg" alt="applePlayStore" /></a>
        </div>
    </div>
</div>

<span>All rights reserved@jadoo.co</span>
{/* </footer> */}
    </div>
  )
}

export default Footer