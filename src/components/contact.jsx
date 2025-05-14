import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";


export const Contact = (props) => {

  return (
    <div id="contact" className="contact">
      <h2 style={{ textAlign: 'center' }}>Contact US</h2>
      
        <section className="contact newsletter section">
          <div className="container">
            
            <div className="row container">
              <div className="col-lg-6  col-12">
            
                <div className="subscribe-text">
                  <h6></h6>
                  <p style={{color:"black"}}>Please provide your email so we can get back to you.</p>
                </div>
            
              </div>
              <div className="col-lg-6  col-12">
            
                <div className="subscribe-form">
                    <input name="EMAIL" placeholder="Your email address" className="common-input" onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Your email address'" required="" type="email"/>
                    <button className="btn">Submit</button>
                </div>
        
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};
