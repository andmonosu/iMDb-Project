import type {FacetValue, SearchState} from "../../types";
import type {MutationTree} from "vuex";

export const mutations: MutationTree<SearchState> = {
    setTitle(state,title:string){
        state.title=title;
    },
    setGenres(state,genres:FacetValue[]){
        state.genres=genres;
    },
    setTypes(state,types:FacetValue[]){
        state.types=types;
    },
    setGenresFilter(state,gender:string){
        state.genresFilter=gender;
    },
    setTypeFilter(state,type:string){
        state.typeFilter=type;
    },
    setMinYearFilter(state,minYear:number){
        state.minYearFilter=minYear;
    },
    setMaxYearFilter(state,maxYear:number){
        state.maxYearFilter=maxYear;
    },
    setMinDurationFilter(state,minDuration:number){
        state.minDurationFilter=minDuration;
    },
    setMaxDurationFilter(state,maxDuration:number){
        state.maxDurationFilter=maxDuration;
    },
    setMinScoreFilter(state,minScore:number){
        state.minScoreFilter=minScore;
    },
    setSortFilter(state,sort:string){
        state.sortFilter=sort;
    }
};