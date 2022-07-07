import React from 'react';
import { Routes, Route, Link, BrowserRouter, useNavigate } from 'react-router-dom';
import { AllPokemon } from '../components/AllPokemon';
import { SearchPokemon } from '../components/SearchPokemon';
import { SinglePokemon } from '../components/SinglePokemon';

export const MainRouter = () => {
    

    // Search pokemon
    const searchPokemon = (e) => {
        // e.preventDefault();
        // let target = e.target;
        // let pokemonName = target.name.value;
        
    }

    return (
        <BrowserRouter>
            <SearchPokemon/>
            <Routes>
                <Route path="/" element={<AllPokemon/>}></Route>
                {/* Single pokemon*/}
                <Route path="/pokemon/:id/:name" element={<SinglePokemon/>}></Route>
                <Route path="/pokemon/:name" element={<SinglePokemon/>}></Route>
                <Route path="/pokemon/:id" element={<SinglePokemon/>}></Route>
                <Route path="/pokemon" element={<SinglePokemon/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}