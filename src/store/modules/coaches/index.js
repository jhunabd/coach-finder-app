import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";


export default {
    namespaced : true,
    state(){
        return {
            coaches: [{
                id: 'c1',
                name: 'Ceyhun',
                surname: 'Abdullayev',
                areas: ['frontend','backend','devops'],
                description: "My name is Ceyhun Abdullayev and I am a fullstack developer",
                hourlyRate: 30
            },
            {
                id: 'c2',
                name: 'Nermin',
                surname: 'Abdullayeva',
                areas: ['frontend','backend','devops'],
                description: "My name is Nermin Abdullayeva and I am a fullstack developer",
                hourlyRate: 30
            }
        ],
        }
    },
    actions,
    mutations,
    getters
}