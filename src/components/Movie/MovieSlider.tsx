import React, {FC, useState} from 'react';
import {IFilm} from "../Types";

interface Props {
    films: IFilm[]
}

export const MovieSlider: FC<Props> = ({films}) => {

    //уменьшить количество отображаемого контента, если указано много актеров, режиссеров и тп

    const [activeIndex, setActiveIndex] = useState<number>(0)

    const item = films[activeIndex]

    return (
        <div className='slider'>
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
                            <span>Director: </span>{item.directors}</section>
                        <section className="cinemaApp__info-writer">
                            <span>Writers: </span>{item.writers}</section>
                        <section className="cinemaApp__info-year">
                            <span>Year: </span>{` ${item.year}`}</section>
                        <section className="cinemaApp__info-cast">
                            <span>Cast: </span>{` ${item.cast.join(', ')}`}</section>
                    </section>
                </section>
                <section className="cinemaApp__plot">
                    <section className="cinemaApp__plot_short">Short Plot</section>
                    <section className="cinemaApp__plot">{item.plot}</section>
                </section>
            </section>
            <button className='slider__btn slider__btn_left' onClick={() => setActiveIndex((films.length + activeIndex - 1) % films.length)}>Left</button>
            <button className='slider__btn slider__btn_right' onClick={() => setActiveIndex((activeIndex + 1) % films.length)}>Right</button>
        </div>
    );
};