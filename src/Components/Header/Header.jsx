import React from 'react'
import "./Header.css"
import logo from  '../../Assets/JaddoLogo.svg';

const Header = () => {
  return (
    <div className='header'>
      <header>
      <div>
        <a href="#"><img src={logo} alt="JaddoLogo" /></a>
        {/* <img src="JaddoLogo.svg" alt="" /> */}

      </div>
      <nav>
        <ul className='navLinks'>
          <li><a href="#destination">Desitnations</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#flight">Flights</a></li>
          <li><a href="#stepToBook">Bookings</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#subscribe">Sign up</a></li>
          <li>
            <a href="#">
              <select name="" id="">
                <option value="0">EN</option>
                <option value="1">AF</option>
                <option value="2">AL</option>
                <option value="3">AR</option>
                <option value="4">FR</option>
                <option value="5">BA</option>
                <option value="6">CA</option>
                <option value="7">DE</option>
                <option value="8">ES</option>
                <option value="9">FR</option>
                <option value="10">OC</option>
              </select>
            </a>
          </li>
        </ul>
      </nav>
       {/* HAMBURGER MENU BUILT WITH CSS  */}
      <div id="hambuger">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </header>


        </div>
  )
}

export default Header