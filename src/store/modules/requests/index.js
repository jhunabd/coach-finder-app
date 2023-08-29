import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
    namespaced: true,
    state(){
        return {
            requests: [],
        }
    },

    mutations: mutations,
    actions: actions,
    getters: getters
};