import React, { useState } from "react";
import PropTypes from 'prop-types';
// import img1 from "/img/img1.png";
export default function About(props){
  const [myStyle, setStyle] = useState(' ');

    return(
      <>
      <section>
        <div className="container-fluid con-bg">
           <div className="row">
               <div className="box-1">
                <p>FREE ONLINE HANDY TOOLS</p>
                <h1 className="case-heading">CASE CONVERT</h1>
                {/* <img src="/img/img1.png"></img> */}
              </div>
           </div>
        </div>
      </section>        
      </>
    );
}