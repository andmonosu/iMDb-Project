import Vuex from 'vuex';
import type {RootState} from "../types";
import {search} from "./searchModule/search.module";
import {film} from "./filmModule/film.module";

export const store= new Vuex.Store<RootState>( {
    modules: {
        search,
        film
    }
})