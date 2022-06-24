import React, {FC} from 'react';
import './Main.css';

interface IMain {
    films: IFilm[]
}

interface IFilm {
    id: number
    title: string
    genres: Array<string>
    director: string
    writers: Array<string>
    year: number
    cast: Array<string>
    plot: string
}

export const Main: FC<IMain> = ({films}) => {
    return (
        <main>
            <section className={"cinemaApp__info"}>
                <section className="cinemaApp__poster">
                    <img src="./assets/img/poster.jpg" alt="poster"/>
                </section>
                {films.map((item, index) => {
                    return (
                        <section key={index} className="cinemaApp__description">
                            <section key={index + 1} className="cinemaApp__info-title"><span>Title:</span>{item.title}</section>
                            <section key={index + 2} className="cinemaApp__info-genres"><span>Genres:</span>{item.genres}</section>
                            <section key={index + 3} className="cinemaApp__info-director"><span>Director:</span>{item.director}</section>
                            <section key={index + 4} className="cinemaApp__info-writer"><span>Writers:</span>{item.writers}</section>
                            <section key={index + 5} className="cinemaApp__info-year"><span>Year:</span>{item.year}</section>
                            <section key={index + 6} className="cinemaApp__info-cast"><span>Cast:</span>{item.cast}</section>
                        </section>
                    )
                })}
            </section>
            <section className="cinemaApp__plot">
                <section className="cinemaApp__plot_short">Short Plot</section>
                {films.map(item => <section key={item.id} className="cinemaApp__plot">{item.plot}</section>)}
            </section>
        </main>
    );
};