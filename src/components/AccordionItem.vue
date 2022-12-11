<template>
	<div class="accordion-item">
		<h2 class="accordion-header" :id="'accordion_item_' + id">
			<button
				class="accordion-button collapsed small"
				type="button"
				data-bs-toggle="collapse"
				:data-bs-target="'#collapse_' + id"
				aria-expanded="false"
				:aria-controls="'collapse_' + id">
				{{ mapName }}
				<MapEditBtns :isAuthor="isAuthor" @showModal="callShowModal" />
			</button>
		</h2>
		<div
			:id="'collapse_' + id"
			class="accordion-collapse collapse"
			:aria-labelledby="'heading_' + id"
			data-bs-parent="#accordionFather">
			<div class="accordion-body">
				<p class="accordion_description">
					Data de Criação:
					<span class="accordion_data"
						>{{ mapCreation.date }} {{ mapCreation.time }}</span
					>
				</p>
				<p class="accordion_description">
					Última Modificação:
					<span class="accordion_data"
						>{{ lastModified.date }} {{ lastModified.time }}</span
					>
				</p>
				<span class="accordion_description">Alterado por {{ changedBy }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import MapEditBtns from "./MapEditBtns.vue";
	export default {
		name: "AccordionItem",
		components: { MapEditBtns },
		props: {
			id: Number,
			mapName: String,
			mapCreation: { date: String, time: String },
			lastModified: { date: String, time: String },
			changedBy: String,
			isAuthor: Boolean,
		},
		methods: {
			callShowModal(el) {
				console.log("Oiii");
				this.$emit("showModal", el);
			},
		},
	};
</script>