<template>
	<div id="container_map">
		<div id="btns_map">
			<div id="map_view">
				<button id="default" class="tooltip_caller">
					<span class="tooltip_desc tooltip_right">Default</span>
				</button>
				<button id="schema" class="tooltip_caller">
					<span class="tooltip_desc tooltip_right">Estrutural</span>
				</button>
				<button id="account-tree" class="tooltip_caller">
					<span class="tooltip_desc tooltip_right">Árvore</span>
				</button>
			</div>

			<div id="zoom">
				<button id="zoom_in" class="tooltip_caller">
					<span class="tooltip_desc tooltip_right">Zoom In</span>
				</button>
				<button id="zoom_out" class="tooltip_caller">
					<span class="tooltip_desc tooltip_right">Zoom Out</span>
				</button>
			</div>

			<DropdownArea btnId="subtitles" btnClass="subtitles" btnTitle="Legenda" setTooltipSide="right">
				<div class="dropdown_information_container align_legend_items" style="gap: 0 !important">
					<div class="history_item">
						<Knot entityType="physical" :legendDisabled="true" />
						<span class="subtitles_text">Pessoa Física</span>
					</div>
					<div class="history_item">
						<Knot entityType="physical" entitySubTypes="adm" :legendDisabled="true" />
						<span class="subtitles_text"
							>Pessoa Física<br />Administrador de Empresa</span
						>
					</div>
					<div class="history_item">
						<Knot entityType="physical" entitySubTypes="sp" :legendDisabled="true" />
						<span class="subtitles_text">Servidor Público </span>
					</div>
					<div class="history_item">
						<Knot entityType="physical" entitySubTypes="pep" :legendDisabled="true" />
						<span class="subtitles_text"
							>Pessoa Física - Pessoa<br />Exposta Politicamente</span
						>
					</div>
					<div class="history_item">
						<Knot entityType="physical" :knotDisabled="true" :legendDisabled="true" />
						<span class="subtitles_text"
							>Pessoa Física Inativa<br />(Registro de Falecimento)</span
						>
					</div>
					<div class="history_item">
						<Knot entityType="physical" entitySubTypes="pep sp" :legendDisabled="true" />
						<span class="subtitles_text"
							>Pessoa Física - Pessoa<br />Exposta Politicamente,
							Administrador<br />de Empresa, Servidor Público</span
						>
					</div>
					<div class="history_item">
						<Knot entityType="legal" :legendDisabled="true" />
						<span class="subtitles_text">Pessoa Jurídica</span>
					</div>
					<div class="history_item">
						<Knot entityType="legal" class="branch" :legendDisabled="true" />
						<span class="subtitles_text">Pessoa Jurídica - Filial</span>
					</div>
					<div class="history_item">
						<Knot entityType="legal" :knotDisabled="true" :legendDisabled="true" />
						<span class="subtitles_text">Pessoa Jurídica Inativa</span>
					</div>
					<div class="history_item">
						<Knot entityType="legal" class="branch" :knotDisabled="true" :legendDisabled="true" />
						<span class="subtitles_text">Pessoa Jurídica - Filial Inativa</span>
					</div>

					<div class="history_item">
						<img src="./../assets/images/Icons/Arrow.svg" style="width: 32px; margin: auto 0;" />
						<span class="subtitles_text">Pessoas, empresas e diversos - <br/>Relacionados </span>
					</div>
				</div>
			</DropdownArea>
		</div>
	</div>
</template>

<script>
	import DropdownArea from "./dropdown/DropdownArea.vue";
	import Knot from "./entity/Knot.vue";
	export default {
		name: "MapSwitches",
		components: {
			DropdownArea,
			Knot,
		},
	};
</script>
