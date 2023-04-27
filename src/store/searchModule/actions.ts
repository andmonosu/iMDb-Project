import type { RootState, searchOutput} from "../../types";
import type {SearchState} from "../../types";
import type {ActionTree} from "vuex";
import {search, searchGenresAndTypes} from "../../utils";

export const actions: ActionTree<SearchState, RootState> = {
    async fetchData({commit, state}): Promise<void> {
        const data:searchOutput= await search('http://localhost:8080/movies'+(state.title!==""?"/"+state.title:""),false);
        commit('film/setFilms', data.hits, {root: true})
    },

    async fetchGenres({commit}): Promise<void> {
        const data:searchOutput= await searchGenresAndTypes('http://localhost:8080/movies/genres');
        commit('setGenres', data.facets[0].values);
    },
    async fetchTypes({commit}): Promise<void> {
        const data:searchOutput= await searchGenresAndTypes('http://localhost:8080/movies/types');
        commit('setTypes', data.facets[0].values);
    },

    async fetchDataFiltered({commit, state}): Promise<void> {
        const query = ('http://localhost:8080/movies?') +(state.title!==""?"&title="+state.title:"") +(state.typeFilter!==""?"&types="+state.typeFilter:"")
        + (state.genresFilter!==""?"&genres="+state.genresFilter:"") + (state.minDurationFilter?"&minRuntime="+state.minDurationFilter:"")
            + (state.maxDurationFilter?"&maxRuntime="+state.maxDurationFilter:"") +
            (state.minYearFilter?"&minYear="+state.minYearFilter:"")
            + (state.maxYearFilter?"&maxYear="+state.maxYearFilter:"") +
            (state.minScoreFilter?"&minRating="+state.minScoreFilter:"") +
            (state.sortFilter?"&sortCriteria="+state.sortFilter:"");

        const data:searchOutput= await search(query,false);
        commit('film/setFilms', data.hits, {root: true})
    },
    async fetchTrending({commit}): Promise<void> {
        const data: searchOutput = await search("http://localhost:8080/movies?minYear=2000&minRating=7&types=movie",false)
        commit('film/setTrendingFilms', data.hits.slice(1,20), {root: true})
    },
    async fetchRecent({commit}): Promise<void> {
       const data: searchOutput = await search("http://localhost:8080/movies?minYear=2023&types=movie",false)
       commit('film/setRecentFilms', data.hits, {root: true})
    },
    async fetchDaily({ commit }, filters:string[]): Promise<void> {
      let queryParams:string[] = ['&genres=','&minYear=','&maxYear=','&minRuntime=','&maxRuntime=','&minRating='];
      let url:string = 'http://localhost:8080/movies?types=movie';
      let i:number=0;
      filters.map((filter)=>{
          if(i===1){
              if((filter!==""||filter)){
                  url+=queryParams[i]+((Number(filter))-5);
              }
              i++;
              if((filter!==""||filter)){
                  url+=queryParams[i]+((Number(filter))+5);
              }
              i++;
          }else if(i===3){
              if((filter!==""||filter)){
                  url+=queryParams[i]+((Number(filter))-10);
              }
              i++;
              if((filter!==""||filter)){
                  url+=queryParams[i]+((Number(filter))+10);
              }
              i++;
          }else{
              url+=queryParams[i]+filter;
              i++;
          }

      })
        const data:searchOutput = await search(url,true);
        commit('film/setDailyFilms', data.hits, {root: true});
     },

};