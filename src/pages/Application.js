import React from 'react';
import Navigation from '../composants/Navigation';
import file from '../media/GestionStagiaireProgramme.zip';
const Application = () => {
    return (
        <div className="Application">
            <Navigation/>
            <div className="applicationcontent">
                <div className="content">
                    <h1>Application Realise jusqu'a Date</h1>
                    <p>
                        Concernant mes applications, j'ai eu le privilege de participer
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