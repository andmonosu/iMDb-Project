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
    setDailyFilms(state,films:Film[]){
        state.dailyFilmQuestionary=films;
    }
};