import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Proficiency from './components/Profile/Proficiency';
import Project from './components/Profile/Project';
import Stats from './components/Profile/Stats';

function App() {
  return (
    <div className="App">
     <Profile />
     <Proficiency />
     <Project />
     <Stats />
    </div>
  );
}

export default App;
