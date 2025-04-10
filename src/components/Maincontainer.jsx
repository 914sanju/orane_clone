import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img3 from '../assets/img3.avif'; 
import bgImage from "../assets/img4.jpg";

function Maincontainer() {
  return (
    <div className="container2">
    <h2 className="heading-main">Businesses Simplified with Orane:</h2>
    <h3 className="heading-sub">Your one Stop Destination</h3>
    <h2 className="heading-right">for SAP, cloud and Digital Transformations</h2>
      <div className='img3'>
            <img src={img3} alt='Company Logo' width={400} />
        
    <p className="content-paragraph">
      Unlock the potential of SAP S/4 HANA with Orane. We excel in real-time analytics, supply chain optimization,
      tax workflow simplification, and more, tailoring solutions to enhance operational efficiency across Finance,
      Manufacturing, Retail, CPG, Utilities, and Professional Services domains. Experience innovative, practical growth
      with SAP S/4 HANA, and elevate your business to new heights.<br></br>
      <button className="btn2"> More <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "8px",color:"black", padding:"2px", borderRadius: "50%", border:"1px solid black",gap:"5px" ,fontWeight:"bolder" }} />
      </button>
    </p>
    </div>
    <div className="custom-solutions-container">
      <div className="solutions-grid">
      <h1 className="header">Customized Solutions<br></br> For Your Need</h1>

      <div className="nested-grid">
        
        <div className="solution-card-primary">
          <h2>Customized Solutions</h2>
          <p><span className="highlight">RISE with SAP</span></p>
        </div>
        <div className="solution-card">
          <h2>Reinventing Business Intelligence through</h2>
          <p><span className='span'>SAP Analytics Cloud</span></p>
        </div>
        <div className="solution-card">
          <h2>Grow your Business using</h2>
          <p><span className='span'>SAP Ariba</span></p>
        </div>
        <div className="solution-card">
          <h2>Employee-Centric HCM with</h2>
          <p><span className='span'>SAP SuccessFactors</span></p>
        </div>
        <div className="solution-card">
          <h2>Integrate, Extend, and Build with</h2>
          <p><span className='span'>SAP BTP</span></p>
        </div>
        <div className="solution-card">
          <h2> <span className='span'>SAP GRC:</span> SAP’s shield of corporate integrity</h2>
        </div>
      
     
      </div>
    </div>
    <div className="featured-section" style={{ backgroundImage: `url(${bgImage})`  }}>
        <h2 className='featured-h2'>Accelerating Digital Innovation with RISE<br></br> with SAP</h2>
        <p className='content1-paragraph'>Redefine enterprise efficiency and scalability by integrating SAP S/4HANA Cloud’s agility, SAP BTP’s innovation, and real-time analytics.</p>
        <button className="btn3">Read More <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "20px",color:"black", background:"yellow", padding:"2px", borderRadius: "50%", border:"1px solid black",gap:"5px" ,fontWeight:"bolder" }} />
      </button>
      </div>
    </div>
        </div>
  

  
   
  )
}

export default Maincontainer
