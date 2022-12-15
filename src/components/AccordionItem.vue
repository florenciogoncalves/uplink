<template>
	<div class="accordion-item" :ref="`item_${id}`">
		<h2 class="accordion-header" :id="'accordion_item_' + id">
			<button
				class="accordion-button collapsed small"
				type="button"
				data-bs-toggle="collapse"
				:data-bs-target="'#collapse_' + id"
				aria-expanded="false"
				:aria-controls="'collapse_' + id">
				<input v-if="!textArea" type="text" :value="mapName" ref="mapName" disabled />
				<textarea v-else type="text" :value="mapName" ref="mapName" disabled></textarea>
				<MapEditBtns
					:isAuthor="isAuthor"
					@showModal="callShowModal"
					@editMapName="editMapName" />
			</button>
		</h2>
		<div
			:id="'collapse_' + id"
			class="accordion-collapse collapse"
			:aria-labelledby="'heading_' + id"
			:data-bs-parent="'#' + accordionContainer">
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
			accordionContainer: String,
			textArea: Boolean
		},
		methods: {
			callShowModal(el) {
				this.$emit("showModal", el);
			},
			// On change name button click
			editMapName() {
				const input = this.$refs.mapName;
				let saveValue = input.value;
				input.removeAttribute("disabled");
				input.focus();
				function enterCase(evt) {
					if (evt.key === "Enter") {
						input.blur();
						input.setAttribute("disabled", true);
						if (input.value.length <= 1)
							input.value = saveValue;
					}
				}
				input.addEventListener("keydown", enterCase);
			},
		},
		mounted() {
			// Set border color for dropped element
			const item = this.$refs[`item_${this.id}`];
			item.querySelector("h2 > button").addEventListener("click", () => {
				setTimeout(() => {
					try {
						document
							.querySelector(".change_border_color")
							.classList.remove("change_border_color");
					} catch (error) {}
					if (item.querySelector(".show"))
						item.classList.add("change_border_color");
					else item.classList.remove("change_border_color");
				}, 5);
			});
			/*.parentElement.parentElement.style.display = 'none'*/
		},
	};
</script>
