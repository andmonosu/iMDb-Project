import {actions} from "./actions";
import type {Module} from "vuex";
import type {SearchState} from "../../types";
import type {RootState} from "../../types";
import {mutations} from "./mutations";

const namespaced: boolean = true;

export const state: SearchState = {
    gender:"",
    minYear:0,
    query:"",
    minMinutes:0,
    minRating:0,
};
export const search: Module<SearchState, RootState> = {
    namespaced,
    state,
    actions,
    mutations
};