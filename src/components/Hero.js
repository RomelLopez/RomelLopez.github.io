import React from 'react';
import './Hero.css';
import faceshot from "../components/images/faceshot.jpg";

const Heading = () => {

    return (
        <div className="pheadedit">
            <h4 className='myname'>Hi, my name is  <img className="faceshot" src={faceshot} alt="face" /></h4>
            <h1 className="myname2">Romel Lopez </h1>
            <p>I focus on the Front-End development of websites</p>
            <p>
                Hi! My name is Romel I'm a Political Science Grad, but as somebody around tech all their life, I had soon realized that I
                had more experience and passion for tech than I did for government and politics.
                It was in 2021, that I first began diving into this world of code - as my brother and friend would start to discuss topics in
                tech that I could easily understand and follow. </p>
            <p> It was then that I decided to teach myself UX and UI Design, this journey felt as
                if it filled a hole that had been missing in my life throughout my educative career.
                The advantage that I have is the passion and self motivation that I bring into this field.I do not have a traditional CS degree
                and I did not graduate from a bootcamp, but I do have information and natural inclination to learn beyond most,
                because I am self - taught who carries a desire to continually learn more.
            </p>
            <h1> Technologies that I have worked with are
                <footer className="foot">React Javascript HTML CSS</footer>
            </h1>
        </div>
    );
}

export default Heading;
