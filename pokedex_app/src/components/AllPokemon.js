import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pokemon } from './Pokemon';

export const AllPokemon = () => {
  const navigate = useNavigate();
  const itemsToDisplay = 9;
  const [pokemons, setPokemons] = useState([]);
  const pokemonArray = [];


  useEffect(() => {
    getPokemons();
  }, [])

  const getPokemonHandler = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    pokemons.push(data);
    return data;
  }

  const getPokemons = () => {
    for (let i = 1; i <= itemsToDisplay; i++) {
      let pokemonData = getPokemonHandler(i);
    }
  }

  // const showInfoHandler = (id) => {
  //   console.log(id);
  //   console.log("el id es: ");
  //   navigate('/pokemon/3');
  // }
  console.log(pokemons);

  return (
    <div className="container">
      <h1>All pokemon</h1>
      <div className="pokemons_container">
        <Pokemon pokemonJSON={pokemons[0]} />

      </div>
    </div>
  )
}
