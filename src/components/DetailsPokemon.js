import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import '../styles/_detailsPokemon.scss';

export const DetailsPokemon = ({ route, navigate }) => {
  const pokemonLocation = useLocation();
  const pokemonInfoJSON = pokemonLocation.state.pokemonJSON;

  const [showShiny, setShowShiny] = useState(false);

  const pokemonData = {
    id: pokemonInfoJSON.id,
    name: pokemonInfoJSON.name,
    types: pokemonInfoJSON.types,
    height: pokemonInfoJSON.height,
    weight: pokemonInfoJSON.weight,
    sprite: pokemonInfoJSON.sprites.front_default,
    sprite_shiny: pokemonInfoJSON.sprites.front_shiny,
    stats: pokemonInfoJSON.stats
  }

  const typeColors = {
    bug: "#89980E",
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

  return (
    <div>
      <div className="single_card_container">
        <div
          className="sprite_container"
          style={pokemonData.types.length > 1 ? { background: `linear-gradient(to right, ${colorOne}, ${colorTwo})` } : { background: colorOne }}
        >
          <img width="200px" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={showShiny ? pokemonData.sprite_shiny : pokemonData.sprite} alt={`${pokemonData.name}_sprite`} />
        </div>
        <div className="pokemon_data">
          <h2>#{pokemonData.id} {pokemonData.name}</h2>
          <div className="pokemon_types">
            {pokemonData.types.map((type) =>
              <span style={{ background: typeColors[type.type.name] }} className="typePokemon" key={type.type.name}>{type.type.name}</span>
            )}
          </div>
          <div className="details">
            <h3>STATS</h3>
            <ul>
              {pokemonData.stats.map((statDetail, index) =>
                <li key={index}><span>{statDetail.stat.name}</span><span>{statDetail.base_stat}</span></li>
              )}
            </ul>
          </div>
        </div>
      </div >
      <button className="backBtn"><Link to="/">BACK</Link></button>
    </div>
  )
}
