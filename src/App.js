import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        
  <h2>Daar gaan we {props.name}</h2>
  <h3>Mijn favoriete kaassoort is {props.kaas}</h3>
        
        
      </header>
    </div>
  );
}

export default App;
