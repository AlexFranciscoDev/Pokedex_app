import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/_search.scss';

export const SearchPokemon = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const [errors, setErrors] = useState("");

    const searchHandler = async (e, id) => {
        e.preventDefault();
        let target = e.target;
        let pokemonName = target.name.value;
        var pokemonJSON;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            pokemonJSON = await response.json();
            setSearchValue("");
            setErrors("");

            navigate(`/pokemon/${id}`,
                {
                    state: { pokemonJSON }
                });
        } catch (error) {
            console.log(error);
            setErrors(error.message);
        }
    }
    return (
        <div>
            <h1 className="web_title">Pokédex</h1>
            <form onSubmit={searchHandler}>
                <input className="searchInput" type="text" name="name" placeholder="Search pokemon" onChange={event => setSearchValue(event.target.value)} value={searchValue} />
                <input className="searchBtn" type="submit" value="Search" />
            </form>
            {errors !== "" ? <h4 className="notExist">The pokemon you are looking for does not exist</h4> : ""}
        </div>
    )
}
