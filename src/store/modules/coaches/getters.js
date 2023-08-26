export default {
    coaches(state) {
        return state.coaches;
    },
    hasAny(state){
        return state.coaches && state.coaches.length > 0;
    }
}