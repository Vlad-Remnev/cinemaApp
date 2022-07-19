import {createContext, Dispatch, FC, SetStateAction, useState} from "react";
import {IFilm} from "../Types";

interface DataContextInterface {
    film: IFilm | null,
    films: IFilm[],
    mode: string,
    // setMode: (Dispatch<SetStateAction<string>>) => void: string,
    loadRandomMovie: () => void,
    loadMovies: (q: string) => void
}

interface Props {
    children: JSX.Element
}

export const DataCtx = createContext<DataContextInterface>({
    film: null,
    films: [],
    loadRandomMovie: () => {},
    loadMovies: () => {},
    mode: 'random'
});

// Provider in your app

export const DataProvider: FC<Props> = ({children}) => {
        const [film, setFilm] = useState<IFilm | null>(null);
        const [films, setFilms] = useState<IFilm[]>([]);
        const [mode, setMode] = useState<string>('random');
        const loadRandomMovie = () => {
            fetch(`http://localhost:3001/movies/random`)
                .then(res => res.json())
                .then(data => {
                    setFilm(data.item)
                    setMode('random')
                })
        }
        const loadMovies = (q: string) => {
            fetch(`http://localhost:3001/movies?q=${q}`)
                .then(res=> res.json())
                .then(data => {
                    setFilms(data.items)
                    setMode('list')
                })
        }
        const value: DataContextInterface = {
            film,
            films,
            mode,
            // setMode,
            loadRandomMovie,
            loadMovies
        }
        return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>
    }
;

// Consume in your app
// import { useContext } from "react";
//
// export const PostInfo = () => {
//     const appContext = useContext(DataCtx);
//     return (
//         <div>
//             Name: {appContext.name}, Author: {appContext.author}, Url:{" "}
//             {appContext.url}
//         </div>
//     );
// };