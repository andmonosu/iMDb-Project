import type {Film, FilmState} from "../../types";
import type {MutationTree} from "vuex";

export const mutations: MutationTree<FilmState> = {
    setFilms(state,films:Film[]){
        state.films=films;
    },
    setRecentFilms(state,films:Film[]){
        state.recentFilms=films;
    },
    setTrendingFilms(state,films:Film[]){
        state.trendingFilms=films;
    },
    setFilmsWithImage(state,films:Film[]){
        state.filmsWithImage=films;
    }
};