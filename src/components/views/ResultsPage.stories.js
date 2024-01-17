import ResultsPage from "./ResultsPage.vue";

export default {
	title: "Views/ResultsPage",
	component: ResultsPage,
};

export const Resultados = () => ({
	components: {
		ResultsPage
	},
	template: "<ResultsPage></ResultsPage>"
});
