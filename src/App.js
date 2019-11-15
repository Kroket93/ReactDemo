import React from 'react';
import logo from './logo.svg';
import Student from './student/Student';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Daar gaan we {props.name}</h2>
        <h3>Mijn favoriete kaassoort is {props.kaas}</h3>
        <Student stoel="101" favorietedier="panda's"/>
        <Student stoel="99" favorietedier="penguins"/>
        <Student stoel="6" favorietedier="eekhoorns"/>
        <Student stoel="2" favorietedier="katten"/>
        <Student stoel="1" favorietedier="muizen"/>
        <Student stoel="9" favorietedier="galapagos-schildpadden"/>
        <Student stoel="50" favorietedier="papegaaien"/>
        
      </header>
    </div>
  );
}

export default App;
