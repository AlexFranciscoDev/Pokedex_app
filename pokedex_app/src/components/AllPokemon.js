import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AllPokemon = () => {
  const navigate = useNavigate();
  const searchHandler = (id) => {
    console.log(id);
    console.log("el id es: ");
    navigate('/pokemon/3');
  }

  return (
    <div>
      <h1>All pokemon</h1>
      <button onClick={() => searchHandler(9)}>Charizard</button>
    </div>
  )
}
