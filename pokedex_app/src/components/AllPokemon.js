import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pokemon } from './Pokemon';

export const AllPokemon = () => {
  const navigate = useNavigate();
  const itemsToDisplay = 12;
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState(itemsToDisplay);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");


  useEffect(() => {
    getPokemons();
  }, [])

  const getPokemonHandler = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemons(pokemons => [...pokemons, data])
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrors(error.message);
    }
  }

  const getPokemons = async () => {
    setTimeout(async () => {
      for (let i = 1; i <= itemsToDisplay; i++) {
        await getPokemonHandler(i);
      }
    }, 600)
  }

  const getNextPage = async () => {
    setLoading(true);
    setTimeout(async () => {
      setPokemons([]); // Empty current array
      let limitToDisplay = pokemonsToDisplay + itemsToDisplay;
      for (let i = pokemonsToDisplay + 1; i <= limitToDisplay; i++) {
        await getPokemonHandler(i);
      }
      setPokemonsToDisplay(limitToDisplay);
    }, 600)
  }

  const getPreviousPage = async () => {
    // Check if its not the first page
    if (pokemonsToDisplay !== itemsToDisplay) {
      setLoading(true);
      setTimeout(async () => {
        setPokemons([]); // Empty current array
        let limitToDisplay = pokemonsToDisplay - itemsToDisplay; // We have to substract 1, to not repeat
        let offset = limitToDisplay - itemsToDisplay; // We have to substract 1, to not repeat
        for (let i = offset + 1; i <= limitToDisplay; i++) {
          await getPokemonHandler(i);
        }
        setPokemonsToDisplay(limitToDisplay);
      }, 600)
    }
  }

  if (errors != "") {
    return (
      <div className="errors">
        {errors}
      </div>
    )
  } else if (loading) {
    return (
      <div className="loadingio-spinner-dual-ball-eogxk3c1yiv"><div className="ldio-ztpcx4422v">
        <div></div><div></div><div></div>
      </div></div>

    )
  } else if (!loading && errors === "") {
    return (
      <div className="container">
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
}
