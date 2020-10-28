import React from 'react';

function pageprofil(props){
return(
    <div className="p_container">
        <div className="p_container2">
            <div className="nom_prenom">
                <p>Nom: {props.profile.nom}      </p>
                <p>Prenom: {props.profile.prenom}</p>
            </div>
            <div className="bday">
                <p>Date de naissance: {props.profile.date}</p>
            </div>
        </div>

    </div>
)

}
export default pageprofil;