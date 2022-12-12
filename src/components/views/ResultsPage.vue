<template>
	<div id="results_page">
		<div id="network"></div>
		<MapSwitches />
	</div>
</template>

<script>
	import MapSwitches from "../MapSwitches.vue";
	try {
		window.vis = require("vis-network/standalone");
	} catch (e) {}
	export default {
		name: "ResultsPage",
		components: {
			MapSwitches,
		},
		data() {
			return {
				network: {
					nodes: [
						{ id: 1, label: "Alessandro Marcondes" },
						{ id: 2, label: "Choco Joy" },
						{ id: 3, label: "Rei do Hamburger" },
						{ id: 4, label: "Sandra Pérola" },
						{ id: 5, label: "Aquamarine" },
						{ id: 6, label: "Ice Pink" },
						{ id: 7, label: "Allegro 9" },
					],

					edges: [
						{ from: 2, to: 1 },
						{ from: 2, to: 3 },
						{ from: 2, to: 4 },
						{ from: 4, to: 5 },
						{ from: 4, to: 6 },
						{ from: 4, to: 7 },
					],
				},
			};
		},
		beforeMount() {},
		mounted() {
			this.$emit("onResult", true);

			/*
			 ***************************************************
			 ***			 Demontration of no results modal 			***
			 ***************************************************
			 */
			if (this.network.nodes.length <= 0) {
				let router = this.$router;
				try {
					document.querySelector(".on_modal").classList.toggle("on_modal");
				} catch (error) {}
				document.querySelector("#modal").style.display = "flex";
				document.querySelector(`#no_results_modal`).classList.add("on_modal");
				document
					.querySelector("#no_results_modal .can_close_modal")
					.addEventListener("click", () => {
						router.go(-1);
					});
			}

			/*
			 *************************
			 *** 			VisJs 			***
			 *************************
			 */
			// Create an array with nodes
			let nodes = new vis.DataSet(this.network.nodes);

			// Create an array whith edges
			let edges = new vis.DataSet(this.network.edges);

			// Create a network
			let container = document.querySelector("#network");
			let data = {
				nodes: nodes,
				edges: edges,
			};
			var options = {
				locale: "pt",
				nodes: {},
				edges: {
					smooth: false,
				},
				physics: {
					// forceAtlas2Based: {
					// 	springLength: 100,
					// },
					hierarchicalRepulsion: {
						centralGravity: 0,
					},
					maxVelocity: 150,
					minVelocity: 2,
					solver: "forceAtlas2Based",
				},
				// Hierárquico
				// layout: {
				// 	hierarchical: {
				// 		enabled: true,
				// 	},
				// },
			};
			let network = new vis.Network(container, data, options);
		},
	};
</script>
