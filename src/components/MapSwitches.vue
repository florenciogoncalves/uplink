<template>
	<div class="container-map">
		<div class="network-buttons-container">
			<div class="map-view">
				<button
					class="default network-buttons-container__button tooltip-caller"
					@click="$emit('callSetStructureMap', 'default')">
					<span class="tooltip-desc _tooltip--right">Default</span>
				</button>
				<button
					class="schema network-buttons-container__button tooltip-caller"
					@click="$emit('callSetStructureMap', 'schema')">
					<span class="tooltip-desc _tooltip--right">Estrutural</span>
				</button>
				<button
					class="account-tree network-buttons-container__button tooltip-caller"
					@click="$emit('callSetStructureMap', 'tree')">
					<span class="tooltip-desc _tooltip--right">Árvore</span>
				</button>
			</div>

			<div class="zoom">
				<button
					class="zoom-in network-buttons-container__button tooltip-caller">
					<span class="tooltip-desc _tooltip--right">Zoom In</span>
				</button>
				<button
					class="zoom-out network-buttons-container__button tooltip-caller">
					<span class="tooltip-desc _tooltip--right">Zoom Out</span>
				</button>
			</div>

			<DropdownArea
				btnId="subtitles"
				btnClass="subtitles"
				btnSpecialClass="network-buttons-container__button"
				btnTitle="Legenda"
				setTooltipSide="right">
				<div class="dropdown-information-container align-legend-items">
					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="physical"
							:legendDisabled="true" />
						<span class="subtitles-text">Pessoa Física</span>
					</div>

					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="physical"
							entitySubTypes="adm"
							:legendDisabled="true" />
						<span class="subtitles-text"
							>Pessoa Física<br />Administrador de Empresa</span
						>
					</div>

					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="physical"
							entitySubTypes="sp"
							:legendDisabled="true" />
						<span class="subtitles-text">Servidor Público </span>
					</div>
					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="physical"
							entitySubTypes="pep"
							:legendDisabled="true" />
						<span class="subtitles-text"
							>Pessoa Física - Pessoa<br />Exposta Politicamente</span
						>
					</div>

					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="physical"
							:nodeDisabled="true"
							:legendDisabled="true" />
						<span class="subtitles-text"
							>Pessoa Física Inativa<br />(Registro de Falecimento)</span
						>
					</div>

					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="physical"
							entitySubTypes="pep sp"
							:legendDisabled="true" />
						<span class="subtitles-text"
							>Pessoa Física - Pessoa<br />Exposta Politicamente,
							Administrador<br />de Empresa, Servidor Público</span
						>
					</div>

					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="legal"
							:legendDisabled="true" />
						<span class="subtitles-text">Pessoa Jurídica</span>
					</div>

					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="legal"
							class="branch"
							:legendDisabled="true" />
						<span class="subtitles-text">Pessoa Jurídica - Filial</span>
					</div>

					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="legal"
							:nodeDisabled="true"
							:legendDisabled="true" />
						<span class="subtitles-text">Pessoa Jurídica Inativa</span>
					</div>

					<div class="list-item">
						<Node
							:disableMenu="true"
							entityType="legal"
							class="branch"
							:nodeDisabled="true"
							:legendDisabled="true" />
						<span class="subtitles-text">Pessoa Jurídica - Filial Inativa</span>
					</div>

					<div class="list-item">
						<img
							src="./../assets/images/Icons/Arrow.svg"
							style="width: 32px; margin: auto 0" />
						<span class="subtitles-text"
							>Pessoas, empresas e diversos - <br />Relacionados
						</span>
					</div>
				</div>
			</DropdownArea>
		</div>
	</div>
</template>

<script>
	import DropdownArea from "./dropdown/DropdownArea.vue";
	import Node from "./entity/Node.vue";
	export default {
		name: "MapSwitches",
		components: {
			DropdownArea,
			Node,
		},
	};
</script>
