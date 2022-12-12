<template>
	<div class="modal_body">
		<div class="fox-head-logo"></div>
		<h4 class="h4">{{ modalTitle }}</h4>
		<p class="modal_subtitle modal_description" v-html="modalSubtitle"></p>
		<button class="close_modal can_close_modal"></button>
	</div>
</template>

<script>
	export default {
		name: "AlertModal",
		props: {
			modalTitle: String,
			modalSubtitle: String,
		},
	};
</script>
