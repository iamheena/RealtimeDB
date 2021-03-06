import React,{useState,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom'
import './Header.css'

function Header() {
  const[activetab,setActivetab]=useState("Home")
  const location=useLocation()
  useEffect(() => {
    if(location.pathname==="/"){
      setActivetab("Home")
    }else if(location.pathname==="/about"){
      setActivetab("About")
    }else if(location.pathname==="/add"){
      setActivetab("Addcontact")
    }else if(location.pathname==="/view"){
      setActivetab("View")
    }

  },[location])
  return (
  <div className="header">
    <p className="logo">Contact Page</p>    
    <div className="header-right">
      <Link to="/">
        <p className={`${activetab==="Home" ? "active" : ""}`} 
        onClick={()=>{setActivetab("Home")}}>
      Home
        </p>
      </Link>

      <Link to="/add">
        <p className={`${activetab==="Addcontact" ? "active" : ""}`} onClick={()=>setActivetab("Addcontact")}>
      Add Contact
        </p>
      </Link>

      <Link to="/about">
        <p className={`${activetab==="About" ? "active" : ""}`} onClick={()=>setActivetab("About")}>
      About
        </p>
      </Link>

    </div>

  </div>
  )
}

export default Header;
