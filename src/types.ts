
export interface RootState {
    isCatalog:boolean
}

export interface LikedFilmsState{
    films: Film[]
}
export interface SearchState {
    genres:FacetValue[]
    types:FacetValue[],
    title:string,
    sortFilter:string,
    genresFilter:string,
    typeFilter:string,
    minYearFilter:number,
    maxYearFilter:number,
    minDurationFilter:number,
    maxDurationFilter:number,
    minScoreFilter:number,
}


export interface Facet {
    type: string,
    facet: string,
    values: FacetValue[],
}

export interface FacetValue {
    id: string,
    value: string,
    count: number,
    filter: string
}

export interface searchOutput{
    hits:Film[],
    facets:Facet[]
}
export interface FilmState {
    films:Film[],
    recentFilms:Film[],
    trendingFilms:Film[],
    dailyFilmQuestionary:Film[],
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