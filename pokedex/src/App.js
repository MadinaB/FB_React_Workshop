import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const pokemon = ["Daniel", "Mike", "Nursultan"]

  console.log(pokemon)
  return (
    <div className="App">
      <div className="pokedex">
	<div className="pokedex-list">

	  {pokemon.map(name => <li key={name}>
		<button>000 {name}</button>
	  </li>)}

	</div>
      </div>
    </div>
  );
}

export default App;
