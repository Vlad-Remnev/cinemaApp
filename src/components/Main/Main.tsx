import React, {FC, useContext, useEffect, useState} from 'react';
import './Main.css';
import {IFilm} from "../Types";
import MovieBlock from "../Movie/MovieBlock";
import {DataCtx} from "../Context/DataContext";
import {MovieSlider} from "../Movie/MovieSlider";

// interface IMain {
//     films: IFilm[]
// }

export const Main = () => {
    const {film, films, loadRandomMovie, loadMovies, mode} = useContext(DataCtx);

    useEffect(() => {
        loadMovies('')
    }, [])
    const item = film
    return (
        <main>
            {mode === 'random' && item !== null && (
                <MovieBlock item={item}/>
            )}
            {mode === 'list' && films.length > 0 && (
                <MovieSlider films={films}/>)
            }
        </main>
    );
};