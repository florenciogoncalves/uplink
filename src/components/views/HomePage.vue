<template>
	<div id="container_home_page">
		<div class="container">
			<h2 class="h2">Olá! Você está no upLink</h2>
			<p class="p">
				Consulte por pessoa física ou jurídica<br/>para gerar um mapa relacional
			</p>
			<PersonSearchField />
		</div>
	</div>
</template>

<script>
	import PersonSearchField from "../PersonSearchField.vue";
	export default {
		components: { PersonSearchField },
		name: "HomePage",
		mounted() {
			this.$emit("onResult", false);
		},
	};
</script>
