import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";


export default {
    namespaced : true,
    state(){
        return {
            coaches: [{
                id: 'c1',
                name: 'Foo',
                surname: 'Foo',
                areas: ['backend','devops'],
                description: "My name is Foo Foo and I am a fullstack developer",
                hourlyRate: 30
            },
            {
                id: 'c2',
                name: 'Foo',
                surname: 'Foo',
                areas: ['frontend'],
                description: "My name is Foo Foo and I am a fullstack developer",
                hourlyRate: 30
            }
        ],
        }
    },
    actions,
    mutations,
    getters
}