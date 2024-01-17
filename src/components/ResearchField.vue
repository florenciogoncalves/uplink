<template>
	<form class="interative_area research" novalidate>
		<fieldset class="search_field focus" ref="searchField">
			<input
				ref="searchInput"
				type="text"
				placeholder="Digite um critério para localizar no mapa" />

			<button
				class="input-button search"
				ref="searchBtn"
				type="button"></button>
		</fieldset>
	</form>
	<div></div>
</template>

<script>
	export default {
		name: "ResearchField",
	};
</script>
