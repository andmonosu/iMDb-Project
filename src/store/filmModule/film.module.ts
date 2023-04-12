import type {Module} from "vuex";
import type {FilmState} from "../../types";
import type {RootState} from "../../types";
import {mutations} from "./mutations";

const namespaced: boolean = true;

export const state: FilmState = {
    films:[],
    recentFilms:[],
    trendingFilms:[],
    filmsWithImage:[]
};
export const film: Module<FilmState, RootState> = {
    namespaced,
    state,
    mutations
};