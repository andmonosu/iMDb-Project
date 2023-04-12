import type {SearchState} from "../../types";
import type {MutationTree} from "vuex";

export const mutations: MutationTree<SearchState> = {
    setQuery(state,query:string){
        state.query=query;
    }
};