import React from 'react'
import { useLocation } from 'react-router-dom';

export const SinglePokemon = ({route, navigate}) => {
  const pokemonInfo = useLocation();
  console.log(pokemonInfo);
  return (
    <div><h1>{pokemonInfo.state.pokemonJSON.id}</h1></div>
  )
}
