import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";

const films = [
    {
        id: 1,
        title: ' In the Land of the Head Hunters',
        genres: [' Drama, ', 'History'],
        director: ' Edward S. Curtis',
        writers: [' Edward S. Curtis (story)'],
        year: 1972,
        cast: [' Stanley Hunt, ', 'Sarah Constance Smith Hunt, ',
            'Mrs. George Walkus, ', 'Paddy \'Malid, '],
        plot: 'Original advertising for the film describes it as a drama of primitive life on the shores of the North Pacific...'
    }
]

function App() {
    return (
        <div className="cinemaApp">
            <Header/>
            <Main films={films}/>
            <Footer/>
        </div>
    );
}

export default App;
