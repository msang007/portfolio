import React from 'react';
import Navigation from '../composants/Navigation';

const Projet = () => {
    return (
        <div className="Projet">
        <Navigation/>
        <div className="projetcontent">
            <div className="content">
                <h1>Mes Projets</h1>
                <p>
                   En ce qui concerne mes projets, j'ai collaborer
                   sur le developpement d'application pour Android qui etait 
                   la generation de personnage de la serie Marvel. 
                </p>
                <div className="zip">
                        <a href="./media/Marvel.zip" target="_blank">Telecharger Projet</a>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Projet;