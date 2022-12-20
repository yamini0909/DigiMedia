import React from 'react'
import "../../App.css"

import Pic2 from "../../img/pic2.png"
import Header from '../Header/Header'
const About = () => {
  return (
    
    <div>
              <Header />
        <div className="about-section section border-main">
    <div className="illustation-img border ">
        <img className=" img" src={Pic2} alt=""/>
    </div>
    <div className="home-content border">
        <div className="home-heading-agency nav-bar-subheading">
            ABOUT US
        </div>
        <div className="bold-heading-promotion about-promo  ">
            Who Is DigiMedia <em className="color-txt">Agency</em>
        </div>
        <div className="desc-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore dignissimos quae
            reprehenderit laborum blanditiis, aliquam in error necessitatibus et illo quo dolor? Nesciunt nihil
            iste hic pariatur alias magnam corporis facilis unde cum aliquam commodi, illo, libero ea ab!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore dignissimos quae
            reprehenderit laborum blanditiis, aliquam in error necessitatibus et illo quo dolor? Nesciunt nihil
            iste hic pariatur alias magnam corporis facilis unde cum aliquam commodi, illo, libero ea ab!
        </div>
        <button className="mm10px btn-freequotes">Free Quotes</button>
    </div>
    
</div>

</div>
  )
}

export default About