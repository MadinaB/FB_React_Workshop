import React, {
  useState,
  useEffect
} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [details, setDetails] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPokemon(data.results)
      });
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + selectedPokemon)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDetails(data)
      });
  }, [selectedPokemon]);

  return ( <
    div className = "App" >
    <
    div className = "pokedex" >
    <
    div className = "pokedex-list" > {
      pokemon.map(obj => < li key = {
          obj.name
        } >
        <
        button className = {
          obj.name === selectedPokemon ? "active" : ""
        }
        onClick = {
          () => {
            setSelectedPokemon(obj.name);
          }
        } > 000 {
          obj.name
        } < /button> < /
        li > )
    } <
    /div> <
    Image source = {
      details != null ? details.sprites.front_default : ""
    }
    /> <
    Details selectedPokemon={selectedPokemon}
    />

    <
    /
    div > <
    /div>
  );
}

function Image(props) {
  if (!props.source) return null;
  return ( <
    div className = "pokedex-image" >
    "Display image here" <
    img src = {
      props.source
    }
    /> < /
    div >
  )
}

function Details(props) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species/" + props.selectedPokemon)
      .then(response => response.json())
      .then(data => {
        setDescription(data.flavor_text_entries[9].flavor_text)
      });
  }, [props.selectedPokemon]);
  return ( < div className = "pokedex-summary" >
        {description}
    <  /div >
  )
}

export default App;
