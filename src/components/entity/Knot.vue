<template>
	<div class="entity">
		<button :disabled="knotDisabled" class="knot" ref="otherTypes" :class="entityType + '_person ' + entitySubTypes">
			<div v-if="entitySubTypes" class="entity_subtype" v-html="entitySubTypes == 'adm' ? 'ADM' : entitySubTypes == 'sp' ? 'SP' : entitySubTypes == 'pep' ? 'PEP' : ''"></div>
		</button>
		<div v-if="!legendDisabled" class="entity_legend">
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
			entitySubTypes: String,
			highlight: Boolean,
			legendDisabled: Boolean,
			knotDisabled: Boolean,
		},
		methods: {
			setEllipsisOnType() {
				try {
			if(this.entitySubTypes.split(' ').length > 1)
				this.$refs.otherTypes.classList.add('ellipsis')
			} catch (error) {
			}
			}
		},
		mounted() {
			this.setEllipsisOnType()
		},	
	};
</script>

<!-- .adm .sp .pep .ellipis -->
