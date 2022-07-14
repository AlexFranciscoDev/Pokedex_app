import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pokemon } from './Pokemon';

export const AllPokemon = () => {
  const navigate = useNavigate();
  const itemsToDisplay = 12;
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState(itemsToDisplay);
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    getPokemons();
  }, [])

  const getPokemonHandler = async (id) => {
    console.log("id: " + id);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    await setPokemons(pokemons => [...pokemons, data])
  }

  const getPokemons = () => {
    for (let i = 1; i <= itemsToDisplay; i++) {
      let pokemonData = getPokemonHandler(i);
    }
  }

  const getNextPage = () => {
    setPokemons([]); // Empty current array
    let limitToDisplay = pokemonsToDisplay + itemsToDisplay;
    for (let i = pokemonsToDisplay + 1; i <= limitToDisplay; i++) {
      let pokemonData = getPokemonHandler(i);
    }
    setPokemonsToDisplay(limitToDisplay);
  }

  const getPreviousPage = () => {
    // Check if its not the first page
      
      setPokemons([]); // Empty current array
      let limitToDisplay = pokemonsToDisplay - itemsToDisplay; // We have to substract 1, to not repeat
      let offset = limitToDisplay - itemsToDisplay; // We have to substract 1, to not repeat
      for (let i = offset + 1; i <= limitToDisplay ; i++) {
        let pokemonData = getPokemonHandler(i);
      }
      setPokemonsToDisplay(limitToDisplay);
  }

  // const showInfoHandler = (id) => {
  //   console.log(id);
  //   console.log("el id es: ");
  //   navigate('/pokemon/3');
  // }

  return (
    <div className="container">
      <h1>All pokemon</h1>
      <button onClick={getPreviousPage}>Previous</button>
      <button onClick={getNextPage}>Next</button>
      <div className="pokemons_container">
        {pokemons.map((pokemon) =>
          <Pokemon pokemonJSON={pokemon} key={pokemon.id} />
        )}
      </div>
    </div>
  )
}
