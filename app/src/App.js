import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Look at this really cool spinny thing we have here. Visible update.
          Last updated 8/11/2021 1:59 PM PST
          BAKED POTATO
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Everything is fine. Just fine. Absolutely fine.
        </a>
        <a 
          className="App-link"
          href="/.auth/login/aad"
        >
        Log in with Azure AD
        </a>

      </header>
    </div>
  );
}

export default App;
