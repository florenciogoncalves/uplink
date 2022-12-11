<template>
	<div id="container_home_page">
		<div class="container">
			<h2 class="h2">Olá! Você está no upLink</h2>
			<p class="p">
				Consulte por pessoa física ou jurídica para gerar um mapa relacional
			</p>
			<Consult />
		</div>
	</div>
</template>

<script>
	import Consult from "../Consult.vue";
	export default {
		components: { Consult },
		name: "HomePage",
		mounted() {
			this.$emit("onResult", false);
		},
	};
</script>