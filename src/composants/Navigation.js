import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../media/Moi.jpg';
const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                 <div className="idContent">
                     <picture>
                     <img src={photo} alt='ma personne' height={130} width={150} />
                     </picture>
                     <h3>Mamadou Hamidou Sangare</h3>
                 </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                          <i className="fas fa-home"></i>
                          <span>Acceuil</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/Application" activeClassName="navActive">
                          <i className="fas fa-mountain"></i>
                          <span>Apps</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/Projet" activeClassName="navActive">
                          <i className="fas fa-images"></i>
                          <span>Projets</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/Contact" activeClassName="navActive">
                          <i className="fas fa-address-book"></i>
                          <span>Contacts</span>
                        </NavLink>
                    </li>

                    
                </ul>

            </div>


            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/mamadou-hamidou-sangare-15961522a/" target="blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i> </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100007892059249" target="blank" rel="noopener noreferrer"> <i className="fab fa-facebook"></i> </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/_jooker_223/" target="blank" rel="noopener noreferrer"> <i className="fab fa-instagram"></i> </a>
                    </li>
                </ul>

                <div className="signature">
                    <p> Par Mamadou Sangare - 2022</p>

                </div>

            </div>



        </div>
    );
};

export default Navigation;