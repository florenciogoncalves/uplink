<template>
	<header-app :expandBtnOptions="showMoreBtns" @showModal="showModal"></header-app>
	<router-view @onResult="onResult" @showModal="showModal"/>
	<modals></modals>
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
			showModal(modal) {
				try {
					document.querySelector(".onModal").classList.toggle("onModal");
				} catch (error) {}
				document.querySelector("#modal").style.display = "flex";
				document.querySelector(`#${modal}`).classList.add("on_modal");
			},
		},
	};
</script>

<style lang="css" src="./assets/css/style.css"></style>
