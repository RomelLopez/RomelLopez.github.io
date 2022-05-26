import React, { useState, useEffect } from 'react';
import About from './components/About';
import Route from './components/Route';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import './components/Visuals.css';
import Hero from './components/Hero.js';
import CardFlip from './components/CardFlip';
import Mclaren2 from './components/images/Mclaren2.jpg';
import miniDalek from './components/images/miniDalek.jpg';
import App from './App.css';
import Contact from './components/Contact';
import SideBar from './components/SideBar';
import Spinner from './components/Spinner'


export default () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1700)
    }, [])
    return (

        <div>
            {
                loading ? (

                    <Spinner
                    />

                ) : (

                    <div className="pagesetup">
                        <Navbar />
                        <div className="fixing">
                            <Route path='/'>

                                <Hero id='about' />
                                <h2 className="Projectbanner" id='projects'>Projects That I've Built </h2>
                                <CardFlip
                                    image={Mclaren2}
                                    title={"LA Exotics Blog"}
                                    comment={"Built with ReactJS"}
                                    info={"A web app for car enthusiasts in LA where they can share their photos"}
                                    link={'https://lacarsblog.vercel.app'}
                                />

                                <p className="laexoticsdesc"> If you enjoy car spotting as much as I do. I've created this web app for you and I. The focus is on exotic vehicles in
                                    the LA area. I take submissions via email and categorize each photo with its corresponding company manufacturer
                                </p>
                                <CardFlip title={"Doctor Who"}
                                    image={miniDalek}
                                    info={"Informational app built for Doctor Who fans everywhere"}
                                    comment={"Built with ReactJS CSS and a Doctor Who API"}
                                />
                                <p className="doctorwhodesc"
                                > If you enjoy car spotting as much as I do. I've created this web app for you and I. The focus is on exotic vehicles in
                                    the LA area. I take submissions via email and categorize each photo with its corresponding company manufacturer.

                                </p>
                                <div id='contact'>
                                    <Contact />
                                </div>
                                <SideBar />
                                <div className='backtotop' onClick={(e) => { e.preventDefault(); window.location.replace("/#"); }} href='/about'>
                                    Back to top
                                </div>
                            </Route>
                        </div>
                    </div>
                )}</div >
    );
};