import React from 'react';
//import {profiles} from './profiles.js';
function post(props){
return(
    <div className="post_container">
        <div className="message">
        <p>{props.profile.post}</p>
        </div>
        <div className="nblikes">
        <p>{props.profile.likes}</p>
        </div>

    </div>
)
}
export default post;