import type {MutationTree} from "vuex";
import type {RootState} from "../types";

export const mutations: MutationTree<RootState> = {
    setIsCatalog(state,value:boolean){
        state.isCatalog=value;
    }
}