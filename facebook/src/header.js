import React from 'react';
import'./header.css';

function Header(props){
return(

    <div className="h_container">

        <div className="h_titre">
            <h1>Facebook</h1>
        </div>

        <div className="boutons_profils">
            {props.profiles.map ( element => 
            {return <button onClick = {()=> props.onClick(element.id)} > {element.prenom} </button>
            })}
        </div>

    </div>

)
}
export default Header;
