import React from 'react';
import post from './post.js';
import pageprofil from './Profil.js'
//import {profiles} from './profiles.js';

function Page(props){
    return(
        <div>
            <pageprofil profile={props.profiles}/>
            <post profile={props.profiles}/>
            
        </div>
    )
        
    
}

export default Page;