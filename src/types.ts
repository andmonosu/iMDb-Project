
export interface RootState {
}

export interface SearchState {
    gender:string,
    minYear:number,
    query:string,
    minMinutes:number,
    minRating:number,
}

export interface searchOutput{
    hits:Film[],
    facets:any[]
}
export interface FilmState {
    films:Film[],
    recentFilms:Film[],
    trendingFilms:Film[],
    filmsWithImage:Film[]
}

export interface Film {
    tconst: string,
    titleType: string,
    primaryTitle: string,
    originalTitle: string,
    isAdult: boolean,
    startYear: number,
    endYear: number,
    runtimeMinutes: number,
    genres: string[],
    averageRating: number,
    numVotes: number,
    akas: Akas[],
    directors: Nconst[],
    starring: Starring[],

    poster:string

}

export interface Akas{
    title: string,
    region: string,
    language: string,
    isOriginalTitle: boolean
}

export interface Nconst{
    nconst:string
}

export interface Starring{
    name:Nconst,
    characters:string
}