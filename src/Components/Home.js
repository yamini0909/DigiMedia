import React from 'react'
import Pic1 from '../img/pic1.jpg';

const Home = () => {
  return (
    <div>
          <div className="home-section section border-main">
            <div className="home-content border">
                <div className="home-heading-agency nav-bar-subheading">
                    DIGITAL MEDIA AGENCY
                </div>
                <div className="bold-heading-promotion ">
                    We Boost Your Website Traffic
                </div>
                <div className="desc-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore dignissimos quae
                    reprehenderit laborum blanditiis, aliquam in error necessitatibus et illo quo dolor? Nesciunt nihil
                    iste hic pariatur alias magnam corporis facilis unde cum aliquam commodi, illo, libero ea ab!
                </div>
                <button className="mm10px btn-freequotes">Free Quotes</button>
            </div>
            <div className="illustation-img border ">
                <img className="img" src={Pic1} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Home