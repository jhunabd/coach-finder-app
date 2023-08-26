import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import * as views from "./config/view.js";
import  CoachesList  from "./views/coaches/CoachesList.vue";
import  CoachDetails  from "./views/coaches/CoachDetails.vue";
import  CoachRegistration  from "./views/coaches/CoachRegistration.vue";
import  ContactCoach  from "./views/requests/ContactCoach.vue";
import  RequestReceived  from "./views/requests/RequestReceived.vue";
import  NotFound  from "./views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/coaches",
        },
        {
            name: views.CoachesList,
            path: "/coaches",
            component: CoachesList
        },
        {
            name: views.CoachDetails,
            props: true,
            path: "/coaches/:id",
            component: CoachDetails,
            children: [{
                name: views.ContactCoach,
                path: "contact",
                component: ContactCoach,
            }]
        },
        {
            name: views.CoachRegistration,
            path: "/register",
            component: CoachRegistration
        },
        {
            name: views.RequestReceived,
            path: "/request",
            component: RequestReceived
        },
        {
            path: "/:notFound(.*)",
            component: NotFound
        }
    ],
});

export default router;