<template>
	<div id="header">
		<div id="header_top_row">
			<img class="header_logo" src="./../../public/logo.svg" alt="" />
			<div id="header__buttons">
				<DropdownArea btnClass="help" btnTitle="Ajuda">
					<DropItem>Tutorial (em breve)</DropItem>
					<DropItem @click="showModal('#modal-fonts')">Fontes</DropItem>
					<DropItem>FAQ (em breve)</DropItem>
				</DropdownArea>

				<button title="Voltar ao upMiner" class="empty_button apps"></button>
			</div>
		</div>

		<div id="header_bottom_row">
			<div id="header__buttons">
				<DropdownArea btnClass="consult" btnTitle="Consulta">
					<DropItem>
						<a href="./HomePage" target="_blank">Nova consulta</a>
					</DropItem>
					<DropItem :isBtnDisabled="true">Adicionar</DropItem>
				</DropdownArea>

				<DropdownArea btnClass="file" btnTitle="Arquivo">
					<DropItem>Salvar</DropItem>
					<DropItem>Abrir</DropItem>
					<DropItem>Excluir</DropItem>
				</DropdownArea>

				<fieldset id="extra-options">
					<button class="empty_button find_in_page" title="Localizar"></button>
					<button class="empty_button highlight" title="Destacar"></button>
					<button class="empty_button file_upload" title="Exportar"></button>
					<div class="autosave-container">
						<label for="auto-sabe">Autosave</label>
						<input type="checkbox" />
					</div>
					<button class="empty_button history" title="Histórico"></button>
				</fieldset>
			</div>
		</div>
	</div>
</template>

<script>
	import DropdownArea from "./dropdown/DropdownArea.vue";
	import Dropdown from "./dropdown/Dropdown.vue";
	import DropItem from "./dropdown/DropItem.vue";

	export default {
		name: "HeaderApp",
		components: {
			DropdownArea,
			Dropdown,
			DropItem,
		},
		methods: {
			showModal(modal) {
				try {
					document.querySelector(".onModal").classList.toggle("onModal");
				} catch (error) {}
				document.querySelector("#modal").style.display = "flex";
				document.querySelector(modal).classList.add("onModal");
			},
		},
	};
</script>
