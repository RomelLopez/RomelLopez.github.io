import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='Contactme'>
                <h1>Contact Me</h1>
            </div>
            <div>
                <p className="contactpara"> Currently looking for new opportunities - I am always available for questions and comments!</p>
            </div>
            <button className="buttonemail" onClick={() => window.open('mailto:romelanthonylopez@gmail.com?subject=Subject&body=Body%20goes%20here')}> Email Me</button>
        </div >
    )
}




export default Contact;