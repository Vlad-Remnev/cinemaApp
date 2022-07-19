import React, {ChangeEvent, FormEvent, MouseEvent, useContext, useState} from 'react';
import './Header.css';
import {DataCtx} from "../Context/DataContext";

export const Header = () => {

    const [search, setSearch] = useState<string>('')

    const {loadRandomMovie, loadMovies} = useContext(DataCtx);

    const luckyBtnHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        loadRandomMovie()
    }

    const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const searchHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!search.trim()) {
            return
        }
        loadMovies(search.trim())
        setSearch('')
    }
    return (
        <header>
            <form onSubmit={searchHandler} id={'cinemaApp__searchForm'} action="">
                <input type="text" placeholder={'Search any movie...'} value={search} onChange={searchChangeHandler}/>
                <button type="submit" className={"cinemaApp__searchBtn"}>Search</button>
            </form>
            <form id={'cinemaApp__luckyForm'} action="">
                <button type="submit" className={"cinemaApp__luckyBtn"} onClick={luckyBtnHandler}>Get lucky!</button>
            </form>
        </header>
    );
};