import HeaderApp from "./HeaderApp.vue";

export default {
	title: "Cabeçalho/HeaderApp",
	component: HeaderApp,
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { HeaderApp },
	template: "<HeaderApp></HeaderApp>",
});

export const HeaderHomePage = Template;

HeaderHomePage.args = {
	primary: true,
	label: "Cabeçalho da app",
};

export const HeaderResultsPage = Template.bind({});

HeaderResultsPage.args = {
	primary: false,
	label: "Cabeçalho de Resultados",
};