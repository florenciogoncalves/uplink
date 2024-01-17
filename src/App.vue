<template>
<!-- :expandBtnOptions => to show menu with all buttons complete -->
<!-- @showModal => to show some modal when called -->
	<HeaderApp
		:expandBtnOptions="showMoreBtns"
		@showModal="callShowModal"></HeaderApp>
	<RouterView @onResult="onResult" @showModal="callShowModal" />
	<Modals ref="modals"></Modals>
</template>

<script>
	import HeaderApp from "./components/HeaderApp.vue";
	import HomePage from "./components/views/HomePage.vue";
	import Modals from "./components/modal/Modals.vue";
	import ResultsPage from "./components/views/ResultsPage.vue";
	import { RouterView } from "vue-router";

	export default {
		name: "App",
		data() {
			return {
				showMoreBtns: false,
			};
		},
		components: {
			HeaderApp,
			HomePage,
			ResultsPage,
			Modals,
		},
		methods: {
			onResult(e) {
				if (e) {
					this.showMoreBtns = true;
				} else {
					this.showMoreBtns = false;
				}
			},
			callShowModal(modal, sameModal) {
				this.$refs.modals.localShowModal(modal, sameModal)
			},
		},
	};

</script>

<style lang="scss" src="./assets/scss/main.scss"></style>
