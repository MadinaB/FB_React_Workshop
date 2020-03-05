import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setPokemon(data.results)
    }
  );
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  console.log(selectedPokemon);

  return (
    <div className="App">
      <div className="pokedex">
	     <div className="pokedex-list">
        {pokemon.map(obj => <li key={obj.name}>
		        <button className={obj.name === selectedPokemon? "active":""}onClick={()=> {setSelectedPokemon(obj.name);}}>000 {obj.name}</button>
	           </li>)}

	        </div>
      </div>
    </div>
  );
}

export default App;
