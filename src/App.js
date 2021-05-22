import React, { useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';


//Pages
//import PuntosPage from './pages/puntos/puntos.component';
import HomePage from './pages/homepage/homepage.component';
// import SignInSignOutPage from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';

//Component
// import Header from './components/header/header.component'


function App() {

  return (
    <div>
          <Route exact path="/" component={HomePage} />
       
      </div>
  )
}

export default App;
