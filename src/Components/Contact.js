import React from 'react'
import Contact1 from "../img/phone-icon.png"
import Contact2 from "../img/email-icon.png"
import Contact3 from "../img/location-icon.png"



const Contact = () => {
  return (
    <>
    <div className="contact-section section ">
            <div className="contact-heading alg-cnt">
                <div className="service-heading-agency nav-bar-subheading">
                    CONTACT US
                </div>
                <div className="bold-heading-promotion ">
                    Get In Touch With Us  <em className="color-txt">Now</em>
                </div>
            </div>
            <div className="form-map flex">
                <div className="form-input">
                    <div className="form-icons">
                        <div className="icons-contact  flex">
                            <div className="phone-txt">
                                <img className="icons-phone img" src={Contact1} alt=""/>
                                <div className="num textHover">
                                    +123456789
                                </div>
                            </div>
                            <div className="phone-txt">
                                <img className="icons-phone img" src={Contact2} alt=""/>
                                <div className="num textHover">
                                    some@hotmail.com
                                </div>
                            </div>
                            <div className="phone-txt">
                                <img className="icons-phone img" src={Contact3} alt=""/>
                                <div className="num textHover">
                                    Noida, India
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form flex">
                        <div className="form-right">
                        <input className="form-width-10" type="text" placeholder="Name"/>
                        <input className="form-width-10" type="text" placeholder="E-mail"/>
                        <input  className="form-width-10" type="text" placeholder="Phone Number"/>
                        </div>
                        <div className="form-left">
                            <input className="msg-input" type="text" placeholder="Message"/>
                        </div>
                       
                    </div>
                    <button className="msg-now btnHoverBlue">Send Message Now</button>
                </div>
                </div>
            </div>
        
   

    </>
    )
}
        

export default Contact