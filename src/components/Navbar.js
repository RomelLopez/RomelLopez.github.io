import React, { useState } from 'react';
import Link from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faR } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import pdf from '../Resume/romelsresume.pdf'

//the links at the top of the page
const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false)
    return (
        <div className='Navbar'>
            <div className='leftSide'>
                <FontAwesomeIcon className='fonticon' icon={faR} onClick={(e) => { e.preventDefault(); window.location.replace("/"); }} href='/about'></FontAwesomeIcon>
            </div>
            <div className='rightSide'>
                <div className='links' id={showLinks ? 'hidden' : ''}>
                    <div onClick={(e) => { document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }) }} href='/'>
                        About
                    </div>
                    <div onClick={(e) => { document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }} href='/cardflip'>
                        Projects
                    </div>
                    <div onClick={(e) => { document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }} href='/contact'>
                        Contact
                    </div>
                    <div className='resume' >
                        <a href={pdf} > Resume </a>
                    </div>

                </div>
                <button onClick={() => setShowLinks(!showLinks)}> {showLinks ? <FaTimes /> : <FaBars />}</button>
            </div>

        </div >
    )
};


export default Navbar;