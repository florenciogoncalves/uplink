<template>
	<div>
		<button :disabled="isBtnDisabled">
			<slot></slot>
		</button>
	</div>
</template>

<script>
	export default {
		name: "DropItem",
		props: {
			isBtnDisabled: Boolean,
		},
	};
</script>
