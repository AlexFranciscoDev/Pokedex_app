import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchPokemon = () => {
    const navigate = useNavigate();

    const searchHandler = (e) => {
        e.preventDefault();
        let target = e.target;
        let pokemonName = target.name.value;
        console.log(pokemonName);
        navigate('/pokemon/3');
    }
    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={searchHandler}>
                <input type="text" name="name" placeholder="Search pokémon" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}
