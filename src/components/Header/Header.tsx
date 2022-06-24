import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <form id={'cinemaApp__searchForm'} action="">
                <input type="text" placeholder={'Search any movie...'}/>
                <button type="submit" className={"cinemaApp__searchBtn"}>Search</button>
            </form>
            <form id={'cinemaApp__luckyForm'} action="">
                <button type="submit" className={"cinemaApp__luckyBtn"}>Get lucky!</button>
            </form>
        </header>
    );
};