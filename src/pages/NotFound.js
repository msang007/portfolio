//Page Not Found au cas ou un utilisateur malicieux s'amuserait a mettre
//quelque chose dans l'URL.
//importation de librairie react
import React from 'react';
//importation du NavLink de la librairie react-router-dom
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Cette page n'est pas disponible</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Acceuil</span>
                </NavLink>
            </div>
        </div>
    );
};
export default NotFound;