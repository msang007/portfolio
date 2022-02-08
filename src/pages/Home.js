//importation de la librairie react.
import React from 'react';
//importation de ma page de navigation
import Navigation from '../composants/Navigation';
//importation du fichier pdf a telecharger sur ma page Acceuil.
import file from '../media/CV.pdf';
const Home = () => {
    return (
        <div className="Home">
            <Navigation/>
            <div className="homecontent">
                <div className="content">
                    <h1>Mamadou Hamidou Sangare</h1>
                    <p>
                        je me nomme Mamadou Hamidou Sangare et je suis un etudiant en programmation a la cite Collegiale.
                    </p>
                    <div className="pdf">
                        <a href={file}  target="_blank" download>Telecharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;