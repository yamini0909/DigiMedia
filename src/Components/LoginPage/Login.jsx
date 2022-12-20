import React, { useState } from "react";
// import "../../App.css";
import "./Login.css";
import Header from "../Header/Header";
import LoginImg from "../../img/login-img.jpg"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail =(event)=>{
    let value = event.target.value;
    setEmail(value);
}

  const handlePassword =(event)=>{
      let value = event.target.value;
      setPassword(value);
  }



  const handleSubmit = ()=>{
    if(email=="" || password=="") {
      alert("Please enter Email and Password!")
      return;
    }
    console.log(email,password)
    let obj ={
      "email": email,
      "password": password
    };
    localStorage.setItem('digiMediaUser', JSON.stringify(obj));
    // setLoggin(true)
    navigate("/home");
    // obj.email= email;
    // obj.password = password;
    // obj["age"] = 12;
    console.log(obj)
  }

  return (
    <>
     {/* <Header /> */}
   
    <div className="login">
     
      <div className="grid-box">
        <div className="grid1-digi">
          <img className="bg-login" src={LoginImg} alt="" />
          <div className="grid1Heading">DigiMedia</div>
          <div className="grid1Subheading">
            Join us to boost your website traffic
          </div>
        </div>
        <div className="grid2-digi">
          <div className="login-box">
            <div className="heading">SIGN IN</div>
            <div className="email-password-btn">
              <div className="email">
                <div className="email-text">Email</div>
                <input
                  className="space"
                  type="email"
                  placeholder="Enter Email Here"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="pass">
                <div className="email-text">Password</div>
                <input
                  className="space"
                  type="password"
                  placeholder="Enter Password Here"
                  value={password}
                  onChange={handlePassword}
                />
                <div className="forgot-text">Forget Password</div>
              </div>
              <div className="btn">
                {/* <Link to="/home"> */}
                <button onClick={handleSubmit} className="space-btn">SIGN IN</button>
                {/* </Link> */}
                
              </div>
              <div className="create">Create account Here!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
