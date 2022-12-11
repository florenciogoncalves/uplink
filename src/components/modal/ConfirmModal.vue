<template>
	<div class="modal_body">
		<div class="fox-head-logo"></div>
		<h4 class="h4">{{ modalTitle }}</h4>
		<p class="modal_subtitle modal_description">{{ modalSubtitle }}</p>
		<div class="buttons_container">
			<button class="button_text can_close_modal" :disabled="btnNoDisabled">
				Não
			</button>
			<button class="button_primary can_close_modal" :disabled="btnYesDisabled">
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
		},
	};
</script>