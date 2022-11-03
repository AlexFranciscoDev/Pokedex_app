import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Pokemon = ({ pokemonJSON }) => {
    const navigate = useNavigate();
    const [showShiny, setShowShiny] = useState(false);

    const pokemonData = {
        id: pokemonJSON.id,
        name: pokemonJSON.name,
        types: pokemonJSON.types,
        height: pokemonJSON.height,
        weight: pokemonJSON.weight,
        sprite: pokemonJSON.sprites.front_default,
        sprite_shiny: pokemonJSON.sprites.front_shiny,
        stats: pokemonJSON.stats
    }

    const typeColors = {
        bug : "#89980E",
        dark: "#564436",
        dragon: "#715CD5",
        electric: "#F6B11A",
        fairy: "#F8ADF6",
        fighting: "#6A3221",
        fire: "#EA3E0E",
        flying: "#687FDD",
        ghost: "#5F60AF",
        grass: "#68BC2C",
        ground: "#D2B458",
        ice: "#6BD3F4",
        normal: "#C7C1B8",
        poison: "#924191",
        psychic: "#E73C75",
        rock: "#9E873A",
        steel: "#A9AAB5",
        water: "#3398F9"
    }

    const colorOne = typeColors[pokemonData.types[0].type.name];
    const colorTwo = pokemonData.types[1] ? typeColors[pokemonData.types[1].type.name] : "";

    const handleMouseEnter = () => {
        setShowShiny(true);
    }

    const handleMouseLeave = () => {
        setShowShiny(false);
    }

    const showInfoHandler = (id) => {
        console.log(id);
        console.log("el id es: ");
        navigate(`/pokemon/${id}`, 
        {
            state : {pokemonJSON}
        });
    }

    return (
        <div className="card_container">
            <div 
                className="sprite_container"
                style={pokemonData.types.length > 1 ? {background: `linear-gradient(to right, ${colorOne}, ${colorTwo})`} : {background: colorOne}}
            >
                <img width="200px" onClick={() => showInfoHandler(pokemonData.id)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={showShiny ? pokemonData.sprite_shiny : pokemonData.sprite} alt={`${pokemonData.name}_sprite`} />
            </div>
            <div className="pokemon_data">
                <h2>#{pokemonData.id} {pokemonData.name}</h2>
                <div className="pokemon_types">
                    {pokemonData.types.map((type) =>
                        <span style={{background: typeColors[type.type.name]}} className="typePokemon" key={type.type.name}>{type.type.name}</span>
                    )}
                </div>
                <button className="btn_details" onClick={() => showInfoHandler(pokemonData.id)} > DETAILS</button>
            </div>
        </div >
    )
}
