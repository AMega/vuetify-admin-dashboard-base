import Vue from 'vue';
import Router from 'vue-router';

// Import views
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Servers from './views/Servers.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        {
            path: "/servers",
            name: "Servers",
            component: Servers
        }
    ],
    mode: 'history'
});