import HomePage from "./HomePage.vue";

export default {
	title: "Views/HomePage",
	component: HomePage,
};

export const Home = () => ({
	components: {
		HomePage
	},
	template: "<HomePage></HomePage>"
});
