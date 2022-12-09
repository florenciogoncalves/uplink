<template>
	<form class="interative_area" novalidate>
		<div>
			<input
				type="radio"
				name="criteria"
				class="input_button button_pf"
				ref="btnPf" />
			<input
				type="radio"
				name="criteria"
				class="input_button button_pj"
				ref="btnPj" />
		</div>
		<fieldset class="search_field" ref="searchField">
			<input
			ref="searchInput"
				type="text"
				disabled
				placeholder="Selecione um critério" />

			<button v-if="btnRedirect" class="input_button search" ref="searchBtn" type="button"></button>

			<button
				v-else
				class="input_button search"
				ref="searchBtn"
				disabled type="button"
				@click="$router.push('/results')"></button>
		</fieldset>
	</form>
</template>

<script>
	export default {
		name: "Consult",
		props: {
			btnRedirect: Boolean,
		},
		mounted() {
			let pf = this.$refs.btnPf;
			let pj = this.$refs.btnPj;
			let fieldset = this.$refs.searchField;
			let input = this.$refs.searchInput
			let button = this.$refs.searchBtn;

			pf.addEventListener("click", () => {
				pf.className += " actived";
				if (pj.classList.contains("actived")) pj.classList.remove("actived");
				if (!fieldset.classList.contains("actived"))
					fieldset.classList.toggle("actived");
				try {
					input.removeAttribute("disabled");
					button.removeAttribute('disabled')
				} catch (error) {
				}
				input.value = "";
				input.blur();
				input.setAttribute("placeholder", "Digite o CPF ou o Nome Completo");
			});

			pj.addEventListener("click", () => {
				if (!pj.className.match("actived")) pj.className += " actived";
				if (pf.classList.contains("actived")) pf.classList.remove("actived");
				if (!fieldset.classList.contains("actived"))
					fieldset.classList.toggle("actived");
				try {
					input.removeAttribute("disabled");
					button.removeAttribute('disabled')
				} catch (error) {
				}
				input.value = "";
				input.blur();
				input.setAttribute("placeholder", "Digite o CNPJ ou a Razão Social");
			});

			input.addEventListener("focus", () => {
				if (!fieldset.classList.contains("focus"))
					fieldset.classList.toggle("focus");
				if (pf.classList.contains("actived"))
					input.setAttribute("placeholder", "Joanne Angelina Germano");
				else if (pj.classList.contains("actived"))
					input.setAttribute("placeholder", "Rei do Hamburguer");
			});

			input.addEventListener("blur", () => {
				if (fieldset.classList.contains("focus"))
					fieldset.classList.toggle("focus");
				if (pf.classList.contains("actived"))
					input.setAttribute("placeholder", "Digite o CPF ou o Nome Completo");
				else if (pj.classList.contains("actived"))
					input.setAttribute("placeholder", "Digite o CNPJ ou a Razão Social");
			});
		},
	};

</script>
