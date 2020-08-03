import { groupBy } from 'lodash';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

// Vue Router
Vue.use(VueRouter);

// router for vue
const router = new VueRouter({
	routes,
	mode: 'history',
	saveScrollPosition: true,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return { selector: to.hash };
		}
		// return {x: 0, y: 0};
	}
});

//ADD View APP
new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
});
