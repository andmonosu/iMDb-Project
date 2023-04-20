import type {MutationTree} from "vuex";
import type {Film, LikedFilmsState} from "../../types";

export const mutations: MutationTree<LikedFilmsState> = {
    addFilm(state,film:Film){
        state.films.push(film);
    },
    removeFilm(state,film:Film){
        state.films.forEach( (element, index) => {
            if(element === film) state.films.splice(index,1);
        });
    }
}