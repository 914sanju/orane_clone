import React from 'react';
import './custome.css';
import img1 from '../assets/img1.png'; 
import img2 from '../assets/img2.png'; 


function Navbar() {
  return (
    <div className='navbar'>
      <div className='img1'>
        <img src={img1} alt='Company Logo' width={100} />
      </div>

      <div className='menu-list'>
        <ul>
          <li><a href='#'>Corporate Overview</a></li>

          <li className='dropdown'>
            <a href='#'>SAP Solutions</a>
            <div className='dropdown_menu1'>
              {/* <ul>
                <li><a href='#'>S/4HANA</a></li>
                <li><a href='#'>SAP BTP</a></li>
                <li><a href='#'>SAP Analytics</a></li>
                <li><a href='#'>SAP Fiori</a></li>
              </ul> */}
            </div>
          </li>

          <li><a href='#'>Digital Business Services</a></li>
          <li><a href='#'>Framework & Accelerators</a></li>
          <li><a href='#'>Industries</a></li>
          <img src={img2} alt='Company Logo'width={100} />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
