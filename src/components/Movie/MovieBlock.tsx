import React, {FC} from 'react';
import './MovieBlock.css';
import {IFilm} from "../Types";

interface IMovieBlock {
    item: IFilm
}

const MovieBlock:FC<IMovieBlock> = ({item}) => {
    return (
        <section>
            <section className={"cinemaApp__info"}>
                <section className="cinemaApp__poster">
                    <img src={item.poster} alt="poster"/>
                </section>
                <section className="cinemaApp__description">
                    <section className="cinemaApp__info-title">
                        <span>Title: </span>{item.title}
                    </section>
                    <section className="cinemaApp__info-genres">
                        <span>Genres: </span>{` ${item.genres.join(', ')}`}</section>
                    <section className="cinemaApp__info-director">
                        <span>Director: </span>{` ${item.directors.join(', ')}`}</section>
                    <section className="cinemaApp__info-writer">
                        <span>Writers: </span>{` ${item.writers.join(', ')}`}</section>
                    <section className="cinemaApp__info-year">
                        <span>Year: </span>{` ${item.year}`}</section>
                    <section className="cinemaApp__info-cast">
                        <span>Cast: </span>{` ${item.cast.join(', ')}`}</section>
                </section>
            </section>
            <section className="cinemaApp__plot">
                <section className="cinemaApp__plot_short">Short Plot</section>
                <section key={item.id} className="cinemaApp__plot">{item.plot}</section>
            </section>
        </section>
    );
};

export default MovieBlock;