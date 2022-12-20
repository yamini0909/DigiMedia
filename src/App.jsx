import React from "react"
import './App.css';
import { BrowserRouter, Router,Routes, Route} from "react-router-dom";
import Main from "./Components/Main/Main";
import Login from "./Components/LoginPage/Login";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Project/Project";
import Service from "./Components/Service/Service";
import Header from "./Components/Header/Header";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<Login/>} />
         <Route path="/home" element={<Home/>} />
         <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
