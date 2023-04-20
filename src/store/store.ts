import Vuex from 'vuex';
import type {RootState} from "../types";
import {search} from "./searchModule/search.module";
import {film} from "./filmModule/film.module";
import {likedFilms} from "../store/likedFilmsModule/likedFilm.module";
import {mutations} from "../store/mutations";

export const store= new Vuex.Store<RootState>( {
    state:{
        isCatalog:false
    },
    mutations:mutations,
    modules: {
        search,
        film,
        likedFilms,
    }
})

