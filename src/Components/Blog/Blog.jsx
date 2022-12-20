import React from 'react'
import Blog1 from "../../img/blog-post-01.jpeg"
import Blog2 from "../../img/40781013.jpg"
import "../../App.css"
import Header from '../Header/Header'

const Blog = () => {
  return (
    <div>
              <Header />
        <div className="blog-section section">
            <div className="servive-heading alg-cnt">
                <div className="service-heading-agency nav-bar-subheading">
                    RECENT NEWS
                </div>
                <div className="bold-heading-promotion ">
                    Check Our Blog <em className="color-txt">Posts</em>
                </div>
            </div>
            <div className="blog content">
                <div className="grid1">
                    <img className="border-radius23 img" src={Blog1} alt=""/>
                    <div className="btn-date flex">
                        <button className="seo btnHover">SEO analysis</button>
                        <div className="date">03 August 2021</div>
                    </div>
                    <div className="blog-desc-heading">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa similique exercitationem quas
                        enim culpa sed.

                    </div>
                    <div className="blog-desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa similique exercitationem quas
                        enim culpa sed, vitae perferendis minus consectetur accusantium doloremque. Aliquam dolores enim
                        voluptatibus vel ex repudiandae totam obcaecati laborum iste officia repellat beatae error, cum,
                        rem ea sed!
                    </div>
                    <div className="writer flex ">
                        <div className="img-name flex">
                            <img className="profile img" src={Blog2} alt="" width="20%"/>
                            <p className="name-img">By: Andrea Mentuzi</p>
                        </div>
                        <button className="discover-more btnHoverBlue">Discover More</button>
                    </div>
                    
                </div>
                <div className="grid2">
                    <div className="blog-subsection">
                        <div className="img-txt flex">
                            <img className="border-radius-bottom img-50" src="img/portfolio-01.jpeg" alt=""/>
                            <div className="txt-with-img">
                                <div className="btn-date flex">
                                    <button className="seo btnHover"> SEO analysis</button>
                                    <div className="date">03 August 2021</div>
                                </div>
                                <div className="heading-txt">
                                    <p className="blog-desc-heading">Lorem ipsum dolor sit amet.</p>
                                    <p className="blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero?</p>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className="grid3">
                    <div className="blog-subsection">
                        <div className="img-txt flex">
                            <img className="border-radius-bottom img-50" src="img/portfolio-01.jpeg" alt=""/>
                            <div className="txt-with-img">
                                <div className="btn-date flex">
                                    <button className="seo btnHover">SEO analysis</button>
                                    <div className="date">03 August 2021</div>
                                </div>
                                <div className="heading-txt">
                                    <p className="blog-desc-heading">Lorem ipsum dolor sit amet.</p>
                                    <p className="blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid3">
                    <div className="blog-subsection">
                        <div className="img-txt flex">
                            <img className="border-radius-bottom img-50" src="img/portfolio-01.jpeg" alt=""/>
                            <div className="txt-with-img">
                                <div className="btn-date flex">
                                    <button className="seo btnHover">SEO analysis</button>
                                    <div className="date">03 August 2021</div>
                                </div>
                                <div className="heading-txt">
                                    <p className="blog-desc-heading">Lorem ipsum dolor sit amet.</p>
                                    <p className="blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 

    </div>
  )
}

export default Blog