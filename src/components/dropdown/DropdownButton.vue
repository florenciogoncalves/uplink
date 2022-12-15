<template>
	<button class="empty_button tooltip_caller">
		<span class="tooltip_desc" :class="'tooltip_' + tooltipSide">{{ setBtnTitle }}</span>
	</button>
</template>

<script>
	export default {
		name: "DropdownButton",
		props: {
			setBtnTitle: String,
			tooltipSide: String
		},
	};
</script>
