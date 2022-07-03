import React, {FC, useEffect, useState} from 'react';
import './Main.css';

// interface IMain {
//     films: IFilm[]
// }

interface IFilm {
    id: number
    poster: string
    title: string
    genres: Array<string>
    directors: Array<string>
    writers: Array<string>
    year: number
    cast: Array<string>
    plot: string
}

export const Main = () => {
    const [films, setFilms] = useState<IFilm[]>([]);
    useEffect(() => {
        fetch(`http://localhost:3001/movies`)
            .then(res => res.json())
            .then(data => {
                setFilms(data.items)
            })
    }, [])
    return (
        <main>
            {films.map((item, index) => {
                return (
                    <section>
                        <section className={"cinemaApp__info"}>
                            <section className="cinemaApp__poster">
                                <img src={item.poster} alt="poster"/>
                            </section>
                            <section key={index} className="cinemaApp__description">
                                <section key={index + 1} className="cinemaApp__info-title">
                                    <span>Title: </span>{item.title}
                                </section>
                                <section key={index + 2} className="cinemaApp__info-genres">
                                    <span>Genres: </span>{` ${item.genres.join(', ')}`}</section>
                                <section key={index + 3} className="cinemaApp__info-director">
                                    <span>Director: </span>{item.directors}</section>
                                <section key={index + 4} className="cinemaApp__info-writer">
                                    <span>Writers: </span>{item.writers}</section>
                                <section key={index + 5} className="cinemaApp__info-year">
                                    <span>Year: </span>{` ${item.year}`}</section>
                                <section key={index + 6} className="cinemaApp__info-cast">
                                    <span>Cast: </span>{` ${item.cast.join(', ')}`}</section>
                            </section>
                        </section>
                        <section className="cinemaApp__plot">
                            <section className="cinemaApp__plot_short">Short Plot</section>
                            <section key={item.id} className="cinemaApp__plot">{item.plot}</section>
                        </section>
                    </section>
                )
            })}
        </main>
    );
};