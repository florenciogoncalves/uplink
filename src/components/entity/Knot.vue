<template>
	<div class="entity">
		<button class="knot" :class="entityType + '_person ' + entityIcons"></button>
		<div class="entity_legend">
			<h3 class="entity_name">
				{{ entityName }}
			</h3>
			<span class="entity_cpf"> {{ entityCPF }} </span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Knot",
		props: {
			entityType: String,
			entityName: String,
      entityIcons: String,
			highlight: Boolean,
		},
	};
</script>