import React from 'react'
import '../App.css';

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="heading-digimedia margin-right-left letter-sp">DigiMedia</div>
            <div className="common-links margin-right-left">
                <a className="mm10px txt-decoration txt-color letter-sp " href="home">Home</a>
                <a className="mm10px txt-decoration txt-color letter-sp" href="about">About</a>
                <a className="mm10px txt-decoration txt-color letter-sp" href="services">Services</a>
                <a className="mm10px txt-decoration txt-color letter-sp" href="projects">Projects</a>
                <a className="mm10px txt-decoration txt-color letter-sp" href="blog">Blog</a>
                <a className="mm10px txt-decoration txt-color letter-sp" href="contact">Contact</a>
                <button className="mm10px btn-freequotes">Free Quotes</button>
            </div>
        </div>
    </div>
  )
}

export default Header