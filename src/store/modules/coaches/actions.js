export default {
    addCoach({commit}, payload){
        const data = {
            id: 'c3',
            name: payload.first,
            surname: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas
        }
        commit('addCoach',data);
    }
}