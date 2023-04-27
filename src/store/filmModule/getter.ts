import type {GetterTree} from "vuex";
import type {Film, FilmState, RootState} from "../../types";

export const getters:GetterTree<FilmState, RootState> = {

    getDailyFilm(state):Film{
        return state.dailyFilmQuestionary[0]
    }

}