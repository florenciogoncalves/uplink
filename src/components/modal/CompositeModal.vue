<template>
	<div class="composite_modal">
		<header id="modal_header">
			<h4 class="h4">{{ modalTitle }}</h4>
			<button class="close_modal can_close_modal"></button>
		</header>
		<div class="composite_modal_slot">
			<p class="modal_subtitle modal_description">{{ modalSubtitle }}</p>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CompositeModal",
		props: {
			modalTitle: String,
			modalSubtitle: String,
		},
	};
</script>
