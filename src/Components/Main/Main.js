import React from 'react'
import About from '../About/About'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Project from '../Project/Project'
import Service from '../Service/Service'

const Main = () => {
  return (
    <div>
         <Header/>
      <Home/>
       <About/>
       <Service/>
       <Project/>
      <Blog/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Main