import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import HomePage from "../components/views/HomePage.vue";
import ResultsPage from "@/components/views/ResultsPage.vue";

const routes = [
	{
		path: "/",
		name: "HomePage",
		component: HomePage,
	},
	{
		path: "/results",
		name: "ResultsPage",
		component: ResultsPage,
	},
	{
		path: '/*',
		redirect: '/'
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
