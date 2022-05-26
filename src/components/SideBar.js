import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
    return (
        <div className='iconsside'>
            <ul className='ulEdit' >
                <li> <a href='https://www.instagram.com/rlope22/'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </a> </li>
                <li> <a href='https://github.com/RomelLopez'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> </li>
                <li> <a href='https://www.linkedin.com/in/romel-lopez-983b44213/'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
            </ul>
        </div >
    )
}

export default SideBar;