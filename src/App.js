//import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Pokemon from "./components/Pokemon/Pokemon";
function App() {
  const [isLoaded,setIsLoaded] = useState(false);
  const [found,setFound] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const ClickHandler = (pokemonInput) => {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemonInput.toLowerCase(),
      method: "GET",
      success: function (data) {
        setFound(false);
        setIsLoaded(true); 
        const abilities = [];
        for (var i = 0; i < Object.keys(data.abilities).length; i++) {
          abilities.push(data.abilities[i].ability.name);
        }
        setPokemon({
          photo: data.sprites.other["official-artwork"].front_default,
          label: data.name,
          weight: data.weight,
          ability: abilities,
        });
      },
      error: function (error) {
        console.error("Error fetching pokemon:", error.status);
        setFound(true);
        setIsLoaded(false);
      },
    });
  };
  return (
    <Container>
      <Header Onclick={ClickHandler} />
      {found && <Card>No Pokemon found with that name..</Card>}
      {isLoaded && <Pokemon Pokemon={pokemon} />}
    </Container>
  );
}

export default App;
