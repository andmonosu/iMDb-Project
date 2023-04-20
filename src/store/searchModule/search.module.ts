import {actions} from "./actions";
import type {Module} from "vuex";
import type {SearchState} from "../../types";
import type {RootState} from "../../types";
import {mutations} from "./mutations";

const namespaced: boolean = true;

export const state: SearchState = {
    genres:[],
    types:[],
    sortFilter:"",
    title:"",
    genresFilter:"",
    typeFilter:"",
    minYearFilter:0,
    maxYearFilter:0,
    minDurationFilter:0,
    maxDurationFilter:0,
    minScoreFilter:0,
};
export const search: Module<SearchState, RootState> = {
    namespaced,
    state,
    actions,
    mutations
};