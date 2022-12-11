<template>
	<div id="container_map">
		<div id="btns_map">
			<div id="map_view">
				<button id="default" class="tooltip_caller">
					<span class="tooltip_desc">Default</span>
				</button>
				<button id="schema" class="tooltip_caller">
					<span class="tooltip_desc">Estrutural</span>
				</button>
				<button id="account-tree" class="tooltip_caller">
					<span class="tooltip_desc">Árvore</span>
				</button>
			</div>

			<div id="zoom">
				<button id="zoom_in" class="tooltip_caller">
					<span class="tooltip_desc">Zoom In</span>
				</button>
				<button id="zoom_out" class="tooltip_caller">
					<span class="tooltip_desc">Zoom Out</span>
				</button>
			</div>

			<button id="subtitles" class="tooltip_caller">
				<span class="tooltip_desc">Legenda</span>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MapSwitches",
	};
</script>