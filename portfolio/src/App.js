import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import styles from './Estilos/App.module.css';
import AppRoutes from './Router/Routes';

function App() {
  return (
    <div className={styles.App}>

      <NavBar/>
  
     <AppRoutes/>
      
     
        
  
    </div>
  );
}

export default App;
