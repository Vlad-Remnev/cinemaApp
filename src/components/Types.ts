export interface IFilm {
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