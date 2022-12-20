import React from 'react'
import Img3 from "../../img/portfolio-01.jpeg"
import Img4 from "../../img/blog-post-02.jpeg"
import Img5 from "../../img/blog-post-03.jpeg"
import Img6 from "../../img/portfolio-04.jpeg"
import Header from '../Header/Header'

const Project = () => {
  return (
    <div>
              <Header />
         <div className="project-section section">
            <div className="project-heading">
                <div className="project-heading-agency nav-bar-subheading">
                    OUR PORTOFOLIO
                </div>
                <div className="bold-heading-promotion about-promo">
                    See Our Recent <em className="color-txt">Projects</em>
                </div>
            </div>
            <div className="grid-picture flex">
                <div className="grid-container width-half">
                    <img className="thumb img" src={Img3}alt="" width="100%"/>
                    <div className="grid-txt">
                        <p className="txt-desc-grid alg-cnt ">Website Builder</p>
                        <p className="txt-desc-grid  alg-cnt">Marketing</p>
                    </div>
                </div>
                <div className="grid-container width-half">
                    <img className="thumb img" src={Img4} alt="" width="100%"/>
                    <div className="grid-txt">
                        <p className="txt-desc-grid alg-cnt ">Website Builder</p>
                        <p className="txt-desc-grid alg-cnt ">Marketing</p>
                    </div>
                </div>
                <div className="grid-container width-half">
                    <img className="thumb img" src={Img5} alt="" width="100%"/>
                    <div className="grid-txt">
                        <p className="txt-desc-grid  alg-cnt">Website Builder</p>
                        <p className="txt-desc-grid  alg-cnt">Marketing</p>
                    </div>
                </div>
                <div className="grid-container width-half">
                    <img className="thumb img" src={Img6} alt="" width="100%"/>
                    <div className="grid-txt">
                        <p className="txt-desc-grid alg-cnt ">Website Builder</p>
                        <p className="txt-desc-grid  alg-cnt">Marketing</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project