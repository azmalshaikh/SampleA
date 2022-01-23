import React from 'react';
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "./images/Logo.png"

function Navbar() {

    const buttonopenclose = () => {
        let x = document.getElementById("iconopen");
        let y = document.getElementById("iconclose");
        
        // console.log(close);
        if(x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
    }

    return (
        <div className="navbar">
            <img src={Logo} alt="City Palace" className="navbar__Logo" height="70" width="auto" />

                <input type="checkbox" id="navbar-Toggle" />
                <label for="navbar-Toggle" className="toggle">
                    <MenuIcon id="iconopen" onClick={buttonopenclose}/>
                    <CloseIcon id="iconclose" onClick={buttonopenclose}/>    
                </label>

                <ul className="navbar__List">
                    <li className="navbar__Item"><a href="index.html" className="navbar__ItemLink active">Hotel</a></li>
                    <li className="navbar__Item"><a href="rooms.html" className="navbar__ItemLink">Rooms</a></li>
                    <li className="navbar__Item"><a href="dining.html" className="navbar__ItemLink">Dining</a></li>
                    <li className="navbar__Item"><a href="login.html" className="navbar__ItemLink">Book Your Stay</a></li>
                    <li className="navbar__Item"><a href="contact.html" className="navbar__ItemLink">Contact Us</a></li>
                </ul>
        </div>
    );
}

export default Navbar;