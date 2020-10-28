import React,{useState} from 'react';

import './App.css';
import Header from './header.js';
import {profiles} from './profiles.js';
import Page from './page';

function App() {
  const [profile, setprofile] = useState(profiles[0]);
  const changeprofiles = idName =>{
    const nvxprofile = profiles.filter(id=>id.id === idName);
    setprofile(nvxprofile[0]);
  }
  return (
    <div>
      <Header profiles={profiles} onClick={changeprofiles.bind(this)}/>
      <Page profiles ={profiles}/>
    </div>
    
  );
}

export default App;
 