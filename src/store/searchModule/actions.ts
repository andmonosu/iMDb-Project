import type {Film, RootState, searchOutput} from "../../types";
import type {SearchState} from "../../types";
import type {ActionTree} from "vuex";
import {search, searchByTitle} from "../../utils";

export const actions: ActionTree<SearchState, RootState> = {
    async fetchData({commit}, query): Promise<void> {
        const data:Film[] = await searchByTitle('http://localhost:8080/search/terms?values=' + query + '&field=primaryTitle')
        commit('film/setFilms', data, {root: true})
    },
    async fetchTrending({commit}): Promise<void> {
        const data: searchOutput = await search("http://localhost:8080/search?maxNHits=10")
        commit('film/setTrendingFilms', data.hits, {root: true})
    },
   async fetchRecent({commit}): Promise<void> {
       const data: searchOutput = await search("http://localhost:8080/search?maxNHits=10")
       commit('film/setRecentFilms', data.hits, {root: true})
   },
};