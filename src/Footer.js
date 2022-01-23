import React from 'react';
import "./Footer.css";
import Logo from "./images/Logo2.png";
import Design from "./images/design2.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="footer">

        <div className="footer__image">
            <a href="index.html" className="footer__link">
                <img src={Logo} alt="City Palace Logo" className="footer__logo"/> 
                <img src={Design} alt="Design" className="welcome__image" />
            </a>
        </div>

        <ul className="footer__socialMedia">
            <li className="footer__socialMediaItems">
                <a href="" className="socialMedia__Links" target="_blank" rel="noreferrer">
                    <TwitterIcon />
                </a>
            </li>
            <li className="footer__socialMediaItems">
                <a href="" className="socialMedia__Links" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                </a>
            </li>
            <li className="footer__socialMediaItems">
                <a href="" className="socialMedia__Links" target="_blank" rel="noreferrer">
                    <InstagramIcon />
                </a>
            </li>
            <li className="footer__socialMediaItems">
                <a href="" className="socialMedia__Links" target="_blank" rel="noreferrer">
                    <LinkedInIcon />
                </a>
            </li>
        </ul>

        <div className="copyright">
            <div className="copyright__info">
                © 2022 Copyright: 
                <a href="index.html" className="copyright__infoLink"> CityPalace</a>
            </div>
        </div>
    </div>
    );
}

export default Footer;
