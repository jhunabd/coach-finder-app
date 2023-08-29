export default {
    addRequest({commit}, payload){
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.userEmail,
            message: payload.message
        };
        commit('addRequest',newRequest);
    }
}