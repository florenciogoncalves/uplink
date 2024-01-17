<template>
	<div class="modal_body">
		<div class="fox-head-logo"></div>
		<h4 class="h4">{{ modalTitle }}</h4>
		<p class="modal_subtitle modal_description" v-html="modalSubtitle"></p>
		<div class="buttons_container">
			<button
				v-if="!btnNoFunction"
				class="button-text can_close_modal"
				:disabled="btnNoDisabled">
				Não
			</button>
			<button
				v-else
				class="button-text"
				:disabled="btnNoDisabled"
				@click="$emit('btnNoDoes')">
				Não
			</button>
			<button
				v-if="!btnYesFunction"
				class="button-primary can_close_modal"
				:disabled="btnYesDisabled">
				Sim
			</button>
			<button
				v-else
				class="button-primary"
				:disabled="btnYesDisabled"
				@click="$emit('btnYesDoes')">
				Sim
			</button>
		</div>
		<button class="close_modal can_close_modal"></button>
	</div>
</template>

<script>
	export default {
		name: "ConfirmModal",
		props: {
			modalTitle: String,
			modalSubtitle: String,
			btnNoDisabled: Boolean,
			btnYesDisabled: Boolean,
			btnYesFunction: Boolean,
			btnNoFunction: Boolean,
		},
	};
</script>
