<template>
	<div id="results_page">
		<div id="network"></div>
		<MapSwitches @callSetStructureMap="setStructureMap" />
	</div>
</template>

<script>
	import MapSwitches from "../MapSwitches.vue";
	import Node from "../entity/Node.vue";
	try {
		window.vis = require("vis-network/standalone");
	} catch (e) {}
	export default {
		name: "ResultsPage",
		components: {
			MapSwitches,
			Node,
		},
		data() {
			return {
				networkComponents: {
					nodes: [
						{
							id: 1,
							// label: "Alessandro Marcondes",
						},
						{
							id: 2,
							// label: "Choco Joy",
						},
						{
							id: 3,
							// label: "Rei do Hamburger",
						},
						{
							id: 4,
							// label: "Sandra Pérola",
						},
						{
							id: 5,
							// label: "Aquamarine",
						},
						{
							id: 6,
							// label: "Ice Pink",
						},
						{
							id: 7,
							// label: "Allegro 9",
						},
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
				network: null,
			};
		},
		methods: {
			callShowModal(theModal) {
				this.$emit("showModal", theModal);
			},
			setStructureMap(structure) {
				this.setNetwork(structure);
			},
			setNetwork(structure = "default") {
				// Create an array with Nodes
				let nodes = new vis.DataSet(this.networkComponents.nodes);

				// // Create an array whith edges
				let edges = new vis.DataSet(this.networkComponents.edges);

				// // Create a network
				let container = document.querySelector("#network");
				let data = {
					nodes: nodes,
					edges: edges,
				};
				
				let options = null;
				if (structure == "schema") {
					options = {
						interaction: { hover: false },
						locale: "pt",
						nodes: {
							shape: "circle",
							color: "#798999",
							scaling: {
            min: 32,
            max: 32
          }
						},
						edges: {
							smooth: false,
							color: { color: "#798999", highlight: "#798999" },
							dashes: true,
							width: 2,
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
						layout: {
							hierarchical: {
								enabled: true,
							},
						},
					};
				} else {
					options = {
						interaction: { hover: false },
						locale: "pt",
						nodes: {
							shape: "circle",
							color: "#798999",
							size: 32
						},
						edges: {
							smooth: false,
							color: { color: "#798999", highlight: "#798999" },
							dashes: true,
							width: 2,
						},
						physics: {
							forceAtlas2Based: {
								springLength: 100,
							},
							
							maxVelocity: 150,
							minVelocity: 2,
							solver: "forceAtlas2Based",
						},
						layout: {
							randomSeed: undefined,
							improvedLayout: true,
							clusterThreshold: 150,
							hierarchical: {
								enabled: false,
								levelSeparation: 150,
								nodeSpacing: 100,
								treeSpacing: 200,
								blockShifting: true,
								edgeMinimization: true,
								parentCentralization: true,
								direction: "UD", // UD, DU, LR, RL
								sortMethod: "hubsize", // hubsize, directed
								shakeTowards: "leaves", // roots, leaves
							},
						},
					};
				}

				this.network = new vis.Network(container, data, options);

				this.network.on("selectNode", (params) => {
					console.log("hoverNode Event:", params);
				});
				this.network.on("deselectNode", (params) => {
					console.log("hoverNode Event:", params);
				});
			},
		},
		mounted() {
			this.$emit("onResult", true);

			/*
			 ***************************************************
			 ***			 Demontration of no results modal 			***
			 ***************************************************
			 */
			if (this.networkComponents.nodes.length <= 0) {
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

			this.setNetwork("default");
		},
	};
</script>
