import React from 'react';
import { Routes, Route, Link, BrowserRouter, useNavigate } from 'react-router-dom';
import { AllPokemon } from '../components/AllPokemon';
import { SearchPokemon } from '../components/SearchPokemon';
import { DetailsPokemon } from '../components/DetailsPokemon';
import { Footer } from '../components/Footer';
export const MainRouter = () => {
    return (
        <BrowserRouter>
            <SearchPokemon/>
            <Routes>
                <Route path="/" element={<AllPokemon/>}></Route>
                {/* Single pokemon*/}
                <Route path="/pokemon/:id/:name" element={<DetailsPokemon/>}></Route>
                <Route path="/pokemon/:name" element={<DetailsPokemon/>}></Route>
                <Route path="/pokemon/:id" element={<DetailsPokemon/>}></Route>
                <Route path="/pokemon" element={<DetailsPokemon/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}