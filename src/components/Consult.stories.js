import Consult from "./Consult.vue";

export default {
	title: "Consult",
	component: Consult,
};

export const Header = () => ({
	components: {
		Consult
	},
	template: "<Consult></Consult>"
});
