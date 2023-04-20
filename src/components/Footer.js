import React from 'react';
import {Button} from "./Button";
import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim, in?
                </p>
                <p className="footer-subscription-text">
                    Lorem ipsum dolor sit amet.
                </p>
            
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 >About Us</h2>
                        <Link to="/">Lorem ipsum dolor.</Link><Link to="/">Iure optio, quisquam.</Link><Link to="/">Fuga,
                        laudantium tempore!</Link><Link to="/">Illo, quia, saepe?</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2 >Contact Us</h2>
                        <Link to="/">Lorem ipsum dolor.</Link><Link to="/">A, beatae necessitatibus.</Link><Link to="/">Aperiam,
                        dolorum, reiciendis.</Link><Link to="/">Dolorum, incidunt, provident.</Link>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 >Sponsers</h2>
                        <Link to="/">Lorem ipsum dolor.</Link><Link to="/">Beatae, repudiandae, similique.</Link><Link
                        to="/">Beatae doloremque, nihil?</Link><Link to="/">Et officia, tempore.</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2 >Our Products</h2>
                        <Link to="/">Lorem ipsum dolor.</Link><Link to="/">Distinctio, quis, ullam.</Link><Link to="/">Consequuntur,
                        esse, soluta!</Link><Link to="/">Hic provident, voluptates.</Link>
                    </div>
                </div>

            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo '>
                            TravelGo © 2023
                            
                        </Link>
                    </div>
                    
                   
                </div>
            </section>
        </div>

    );
}

export default Footer;