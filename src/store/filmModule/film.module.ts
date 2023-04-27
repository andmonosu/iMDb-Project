import type {Module} from "vuex";
import type {FilmState} from "../../types";
import type {RootState} from "../../types";
import {mutations} from "./mutations";
import {getters} from "../../store/filmModule/getter";

const namespaced: boolean = true;

export const state: FilmState = {
    films:[],
    recentFilms:[],
    trendingFilms:[],
    dailyFilmQuestionary:[],
};
export const film: Module<FilmState, RootState> = {
    namespaced,
    state,
    mutations,
    getters
};