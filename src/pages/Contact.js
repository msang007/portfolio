
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React from 'react';
import Navigation from '../composants/Navigation';

const Contact = () => {
    return (
        <div>
            <div className="Contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-Moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Gatineau/Ottawa</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="+13432043841">
                                    <span className="clickInput" onClick={() => 
                                    {alert('Numero copie!');}}>+1 343-204-3841
                                    </span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <CopyToClipboard text="+13432043841">
                                    <span className="monmail@coucou.fr" onClick={() => 
                                     {alert('E-mail copie!');}}>mamadou.sangare31@icloud.com
                                    </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                        <ul>
                            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <h4>Facebook</h4>
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <h4>Instagram</h4>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <h4>LinkedIn</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="http://www.github.com" target="_blank" rel="noopener noreferrer">
                                <h4>github</h4>
                                <i className="fab fa-github"></i>
                            </a>
                        </ul>
                    </div>
                 </div>
             </div>
        </div>
    );
};

export default Contact;

