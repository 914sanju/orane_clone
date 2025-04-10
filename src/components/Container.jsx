import React from 'react';
import './custome.css';
import video from '../Assets/video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";



function Container() {
  return (
    <div className="video">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="contanier" style={{  justifyContent:'space-around' }}>
       <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start",marginTop:"200px",marginLeft:"100px" }}>
       <motion.h1
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
     >
   Business <span>Simplified.</span>
  </motion.h1>

        <p>Transform Idea into Results</p>
        <button className="btn"> Get Started <FontAwesomeIcon icon={faArrowRight} style={{ color: "yellow", fontSize: "20px",background:"black", padding:"3px", borderRadius: "50%", }} />
        </button>
      </div>

    </div>
    </div>
  );
}

export default Container;
