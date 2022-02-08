//importation de la librairie react.
import React from 'react';
//importation de ma page de navigation.
import Navigation from '../composants/Navigation';
//importation de fichier zip qui pourra etre telecharge.
import file from '../media/GestionStagiaireProgramme.zip';
const Application = () => {
    return (
        <div className="Application">
            <Navigation/>
            <div className="applicationcontent">
                <div className="content">
                    <h1>Application Realise jusqu'a Date</h1>
                    <p>
                        Concernant mon application, j'ai eu le privilege de participer
                        en groupe a la creation d'une application de bureau permettant 
                        de gerer les stagiaires(Ajouter,supprimer,Modifier) a partir de WPF 
                        sur Microsoft Visual Studio 2019.
                    </p>
                    <div className="zip">
                        <a href={file}  target="_blank" download>Telecharger Application</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Application;