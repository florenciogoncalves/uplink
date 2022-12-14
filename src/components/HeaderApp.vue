<template>
	<div id="header">
		<div id="header_top_row">
			<router-link to="/">
				<img class="header_logo" src="./../../public/logo.svg" alt="upLink"
			/></router-link>
			<div id="header__buttons">
				<DropdownArea btnClass="help" btnTitle="Ajuda" setTooltipSide="bottom" :class="'to_right'">
					<DropItem>Tutorial (em breve)</DropItem>
					<DropItem @click="$emit('showModal', 'fonts_modal')">Fontes</DropItem>
					<DropItem>FAQ (em breve)</DropItem>
				</DropdownArea>

				<button
					class="empty_button apps tooltip_caller"
					@click="$emit('showModal', 'back_to_upminer_modal')">
					<span class="tooltip_desc">Voltar ao upMiner</span>
				</button>
			</div>
		</div>

		<div id="header_bottom_row">
			<div id="header__buttons">
				<DropdownArea btnClass="consult" btnTitle="Consulta" setTooltipSide="bottom">
					<DropItem>
						<a href="./" target="_blank">Nova consulta</a>
					</DropItem>
					<DropItem
						:isBtnDisabled="!expandBtnOptions"
						@click="$emit('showModal', 'add_modal')"
						>Adicionar</DropItem
					>
				</DropdownArea>

				<DropdownArea btnClass="file" btnTitle="Arquivo" setTooltipSide="bottom">
					<DropItem
						@click="$emit('showModal', 'save_modal')"
						:isBtnDisabled="!expandBtnOptions"
						>Salvar</DropItem
					>
					<!-- the following event returns to the App component -->
					<DropItem @click="$emit('showModal', 'open_modal')">Abrir</DropItem>
					<DropItem @click="$emit('showModal', 'open_modal', true)"
						>Excluir</DropItem
					>
				</DropdownArea>

				<fieldset id="extra_options" v-show="expandBtnOptions">
					<button
						class="empty_button find_in_page tooltip_caller"
						@click="$emit('showModal', 'to_locate_modal')">
						<span class="tooltip_desc tooltip_bottom">Localizar</span>
					</button>
					<DropdownArea btnClass="highlight" btnTitle="Destacar" setTooltipSide="bottom">
						<DropItem>Administradores</DropItem>
						<DropItem>PEP</DropItem>
						<DropItem>Pessoas Físicas</DropItem>
						<DropItem>Pessoas Jurídicas</DropItem>
						<DropItem>Desfazer destaque</DropItem>
					</DropdownArea>
					<DropdownArea btnClass="file_upload" btnTitle="Exportar" setTooltipSide="bottom">
						<DropItem>JPEG</DropItem>
						<DropItem>PNG</DropItem>
						<DropItem>PDF</DropItem>
					</DropdownArea>
					<div class="autosave-container tooltip_caller">
						<label for="auto-sabe">Autosave</label>
						<input
							type="checkbox"
							@click="toggleAutoSave()"
							:checked="autoSave" />
						<span class="tooltip_desc tooltip_bottom">{{
							`${
								autoSave == true
									? "Salvamento automático a cada 3 min"
									: "Clique para ativar o salvamento automático"
							}.`
						}}</span>
					</div>

					<DropdownArea
						btnClass="history"
						btnTitle="Exportar"
						style="margin-left: auto"
						setTooltipSide="bottom"
						:class="'to_right'">
						<h2 class="p-2">Histórico</h2>
						<div class="dropdown_information_container">
							<span class="history_item">Versão Atual</span>
							<span
								v-for="(value, index) in history.slice(0, 9)"
								:key="index"
								class="history_item"
								>{{ history[index].day }}, {{ history[index].mounth }}
								{{ history[index].time }}</span
							>
						</div>
					</DropdownArea>
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
				history: [
					{ day: "23", mounth: "Jul", time: "06:30" },
					{ day: "05", mounth: "Jun", time: "16:15" },
					{ day: "dd", mounth: "Mês", time: "00:00" },
					{ day: "dd", mounth: "Mês", time: "00:00" },
					{ day: "dd", mounth: "Mês", time: "00:00" },
					{ day: "dd", mounth: "Mês", time: "00:00" },
					{ day: "dd", mounth: "Mês", time: "00:00" },
					{ day: "dd", mounth: "Mês", time: "00:00" },
					{ day: "dd", mounth: "Mês", time: "00:10" },
					{ day: "dd", mounth: "Mês", time: "00:10" },
					{ day: "dd", mounth: "Mês", time: "00:80" },
				],
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
