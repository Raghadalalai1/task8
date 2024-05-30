import { useState } from "react"
export default function Navber() {
    const[active,setActive]=useState("list")
    
    const[toggleIcon,setToggleIcon]=useState("nav-toggle")

    const navToggle= ()=>{
        active==="list"?setActive("list nav-active"):setActive("list")
        toggleIcon==="nav-toggle"?setToggleIcon("nav-toggle toggle"):setToggleIcon("nav-toggle")
    }
    return(
      
        <nav className="navbar">
            <div className="logo-info">
                <img src="./img/logo.svg" alt="logo focal x" className="logo" />
                <p className="info">Digital marketing agency</p>
            </div>
            <ul className={active}>
                <li><a href="#" target="_blank" >Home</a></li>
                <li><a href="#" target="_blank" >Services</a></li>
                <li><a href="#" target="_blank" >Portfolio</a></li>
                <li><a href="#" target="_blank" >Clients & Partners</a></li>
                <li><a href="#" target="_blank" >About Us</a></li>
                <li><a href="#" target="_blank" >Let's Talk</a></li>
          
            </ul>
            <div className={toggleIcon} onClick={navToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>

            </div>


        </nav>
    )
    
}