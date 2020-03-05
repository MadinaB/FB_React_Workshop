import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const pokemon = ["Daniel", "Mike", "Nursultan"]
  return (
    <div className="App">
      <div className="pokedex">
	<div className="pokedex-list">

	  {pokemon.map(name => <li>000 {name}</li>)}
	</div>
      </div>
    </div>
  );
}

export default App;
