import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Nav from './components/Navigation.vue';

export const routes = [
	{
		path: '',
		name: 'home',
		components: {
			default: Home,
			'header-main': Header,
			navigation: Nav,
			'footer-main': Footer
		}
	}
];
