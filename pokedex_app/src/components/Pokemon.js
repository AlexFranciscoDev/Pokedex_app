import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Pokemon = ({ pokemonJSON }) => {
    const navigate = useNavigate();
    const pokemonData = {
        id: pokemonJSON.id,
        name: pokemonJSON.name,
        types: pokemonJSON.types,
        sprite: pokemonJSON.sprites.front_default,
        sprite_shiny: pokemonJSON.sprites.front_shiny,
        stats: pokemonJSON.stats
    }
    console.log("json:----" + pokemonJSON);
    const showInfoHandler = (id) => {
        console.log(id);
        console.log("el id es: ");
        navigate('/pokemon/3');
    }

    return (
        <div className="card_container">
            <div className="sprite_container">
                <img width="200px" src={pokemonData.sprite} alt={`${pokemonData.name}_sprite`} />
            </div>
            <div className="pokemon_data">
                <h2>{ pokemonData.name }</h2>
                <h3>type</h3>
                <button className="btn_details" onClick={() => showInfoHandler(9)} > DETAILS</button>
            </div>
        </div >
    )
}
