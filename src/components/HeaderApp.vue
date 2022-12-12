<template>
	<div id="header">
		<div id="header_top_row">
			<router-link to="/">
				<img class="header_logo" src="./../../public/logo.svg" alt="upLink"
			/></router-link>
			<div id="header__buttons">
				<DropdownArea btnClass="help" btnTitle="Ajuda" :class="'to_right'">
					<DropItem>Tutorial (em breve)</DropItem>
					<DropItem @click="$emit('showModal', 'fonts_modal')">Fontes</DropItem>
					<DropItem>FAQ (em breve)</DropItem>
				</DropdownArea>

				<button
					title="Voltar ao upMiner"
					class="empty_button apps"
					@click="$emit('showModal', 'back_to_upminer_modal')"></button>
			</div>
		</div>

		<div id="header_bottom_row">
			<div id="header__buttons">
				<DropdownArea btnClass="consult" btnTitle="Consulta">
					<DropItem>
						<a href="./" target="_blank">Nova consulta</a>
					</DropItem>
					<DropItem
						:isBtnDisabled="!expandBtnOptions"
						@click="$emit('showModal', 'add_modal')"
						>Adicionar</DropItem
					>
				</DropdownArea>

				<DropdownArea btnClass="file" btnTitle="Arquivo">
					<DropItem
						@click="$emit('showModal', 'save_modal')"
						:isBtnDisabled="!expandBtnOptions"
						>Salvar</DropItem
					>
					<!-- the following event returns to the App component -->
					<DropItem @click="$emit('showModal', 'open_modal')">Abrir</DropItem>
					<DropItem @click="$emit('showModal', 'open_modal', true)">Excluir</DropItem>
				</DropdownArea>

				<fieldset id="extra_options" v-show="expandBtnOptions">
					<button
						class="empty_button find_in_page"
						title="Localizar"
						@click="$emit('showModal', 'to_locate_modal')"></button>
					<DropdownArea btnClass="highlight" btnTitle="Destacar">
						<DropItem>Administradores</DropItem>
						<DropItem>PEP</DropItem>
						<DropItem>Pessoas Físicas</DropItem>
						<DropItem>Pessoas Jurídicas</DropItem>
						<DropItem>Desfazer destaque</DropItem>
					</DropdownArea>
					<DropdownArea btnClass="file_upload" title="Exportar">
						<DropItem>JPEG</DropItem>
						<DropItem>PNG</DropItem>
						<DropItem>PDF</DropItem>
					</DropdownArea>
					<div class="autosave-container">
						<label for="auto-sabe">Autosave</label>
						<input
							type="checkbox"
							:title="`${
								autoSave == true
									? 'Salvamento automático a cada 3 min'
									: 'Clique para ativar o salvamento automático'
							}.
							`"
							@click="toggleAutoSave()"
							:checked="autoSave" />
					</div>
					<button class="empty_button history" title="Histórico"></button>
				</fieldset>
			</div>
		</div>
	</div>
</template>

<script>
	import DropdownArea from "./dropdown/DropdownArea.vue";
	import DropItem from "./dropdown/DropItem.vue";
	import PersonSearchField from "./PersonSearchField.vue";

	export default {
		name: "HeaderApp",
		data() {
			return {
				autoSave: localStorage.autoSave,
				onResult: sessionStorage.route == "ResultsPage" ? true : false,
			};
		},
		components: {
			DropdownArea,
			DropItem,
			PersonSearchField,
		},
		props: {
			expandBtnOptions: Boolean,
		},
		methods: {
			toggleAutoSave() {
				sessionStorage.autoSave == "desativado"
					? (sessionStorage.autoSave = "ativado")
					: (sessionStorage.autoSave = "desativado");
				sessionStorage.autoSave == "desativado"
					? (this.autoSave = false)
					: (this.autoSave = true);
			},
		},
		mounted() {
			if (
				sessionStorage.autoSave != "desativado" &&
				sessionStorage.autoSave != "ativado"
			) {
				sessionStorage.autoSave = "desativado";
			}

			sessionStorage.autoSave == "desativado"
				? (this.autoSave = false)
				: (this.autoSave = true);
		},
	};
</script>
