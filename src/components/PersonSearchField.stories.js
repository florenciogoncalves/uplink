import PersonSearchField from "./PersonSearchField.vue";

export default {
	title: "PersonSearchField",
	component: PersonSearchField,
};

export const Header = () => ({
	components: {
		PersonSearchField,
	},
	template: "<PersonSearchField></PersonSearchField>",
});
