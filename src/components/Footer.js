import React from "react";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";
import twitter from "../images/icons/twitter.svg";
import instagram from "../images/icons/instagram.svg";


const Footer = () => {
    return (
        <footer>
        <div className="footer-area">
        <p className="righty"><a style={{"text-decoration": "none"}} href="#top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
        </svg> Move To Top</a></p>
         <p id="big">&copy; All rights are reserved | 2020 @ Ganesh Kale-GKCSD</p>
         <p className="right-two">
          <a href="https://github.com/gkcsd" target="_blank"><img src={github} alt="github" height="24px" width="24px" /></a>
          <a href="https://www.linkedin.com/in/gkcsd" target="_blank"><img src={linkedin} alt="linkedin"  height="24px" width="24px" /></a>
          <a href="https://twitter.com/gkcsd_" target="_blank"><img src={twitter} alt="twitter" height="24px" width="24px" /></a>
          <a href="https://www.instagram.com/igkcsd/" target="_blank"><img src={instagram} alt="instagram" height="24px" width="24px" /></a>
       </p>
        </div>
        </footer>
    );
};
export default Footer;