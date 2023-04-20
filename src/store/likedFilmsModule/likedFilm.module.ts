import type {LikedFilmsState, RootState} from "../../types";
import type {Module} from "vuex";
import {mutations} from "../../store/likedFilmsModule/mutations";

const namespaced: boolean = true;

export const state: LikedFilmsState = {
    films:[]
};
export const likedFilms: Module<LikedFilmsState, RootState> = {
    namespaced,
    state,
    mutations
};