<template>
	<button class="button tooltip-caller">
		&nbsp;
		<span class="tooltip-desc" :class="'_tooltip--' + tooltipSide">{{
			setBtnTitle
		}}</span>
	</button>
</template>

<script>
	export default {
		name: "DropdownButton",
		props: {
			setBtnTitle: String,
			tooltipSide: String,
		},
	};
</script>
