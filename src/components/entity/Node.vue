<template>
	<div class="entity">
		<!-- node -->
		<button
			@click="toggleMenu()"
			:disabled="nodeDisabled"
			class="node"
			ref="otherTypes"
			:class="entityType + '_person ' + entitySubTypes">
			<div
				v-if="entitySubTypes"
				class="entity_subtype"
				v-html="
					entitySubTypes == 'adm'
						? 'ADM'
						: entitySubTypes == 'sp'
						? 'SP'
						: entitySubTypes == 'pep'
						? 'PEP'
						: ''
				"></div>
		</button>

		<!-- Legend -->
		<div v-if="!legendDisabled" class="entity_legend">
			<h3 class="entity_name">
				{{ entityName }}
			</h3>
			<span class="entity_cpf" v-show="showCPF">{{ entityCPF }}</span>
		</div>

		<!-- Menu -->
		<div
			v-if="!disableMenu"
			class="internal_menu"
			ref="internalMenu"
			v-show="menuVisibility">
			<button class="_button _more_options">
				Explorar
				<div class="submenu">
					<button class="_button _more_options">
						Expandir
						<div class="submenu">
							<slot v-if="entityType == 'physical'">
								<button class="_button">QSA - upLexis</button>
								<button class="_button">$ Entidades Relacionais</button>
								<button class="_button">
									$ Participações em Empresas - SPC
								</button>
								<button class="_button">
									$ Participações em Empresas com Score - Boa Vista
								</button>
								<button class="_button">$ Vizinhos</button>
							</slot>

							<slot v-else-if="entityType == 'legal'"
								><button class="_button">QSA - upLexis</button>
								<button class="_button">Filiais - upLexis</button>
								<button class="_button">$ QSA - Boa Vista</button>
								<button class="_button">$ QSA - SPC</button>
								<button class="_button">$ Entidades Relacionais</button></slot
							>
						</div>
					</button>

					<button class="_button _more_options">
						Vizualizar dados
						<div class="submenu">
							<slot v-if="entityType == 'physical'"
								><button
									class="_button"
									@click="callModalCase('cpf_query_modal')">
									Consulta ao CPF - upLexis
								</button>
								<button class="_button">PEP - Transferência Brasil</button>
								<button class="_button">
									Servidores Públicos - Transferência Brasil
								</button>
								<button class="_button">$ PEP - upLexis</button>
								<button class="_button">
									$ Informações Cadastrais - Big Data Corp
								</button>
								<button class="_button">
									$ Classe Social/ Renda Presumida
								</button>
								<button class="_button">$ Protestos - SPC</button>
								<button class="_button">$ Cheques sem fundo - CCF</button>
								<button class="_button">$ Veículos - Frota Atual</button></slot
							>

							<slot v-else-if="entityType == 'legal'"
								><button class="_button">Consulta ao CNPJ - upLexis</button>
								<button class="_button">Vizualizar no Google Maps</button>
								<button class="_button">$ Protestos - SPC</button>
								<button class="_button">$ Veículos - Frota Atual</button></slot
							>
						</div>
					</button>
				</div>
			</button>

			<button class="_button _more_options">
				Editar
				<div
					class="submenu"
					v-if="entityType == 'legal' || entityType == 'physical'">
					<button class="_button" @click="this.$el.classList.add('hidden_entity')">Ocultar</button>
					<button
						class="_button"
						@click="this.showCPF = !this.showCPF"
						v-html="
							this.showCPF ? 'Ocultar Documento' : 'Exibir Documento'
						"></button>
					<button class="_button" @click="callModalCase('comment_modal')">
						Comentar
					</button>
				</div>
			</button>

			<button class="_button">Gerar Dossiê</button>
			<button class="_button _more_options">
				Consulta em outro App
				<div class="submenu">
					<button class="_button">Ficha Cadastral</button>
					<button class="_button">Comparador Societário</button>
					<button class="_button">Validador de RG</button>
					<button class="_button">Veículo</button>
					<button class="_button">Certidões</button>
					<button v-if="entityType == 'legal'" class="_button">
						Balanço Patrimonial
					</button>
					<button class="_button">upSearch</button>
				</div>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "node",
		data() {
			return {
				menuVisibility: false,
				showCPF: true,
			};
		},
		props: {
			entityType: String,
			entityName: String,
			entityCPF: String,
			entitySubTypes: String,
			highlight: Boolean,
			legendDisabled: Boolean,
			nodeDisabled: Boolean,
			disableMenu: Boolean,
		},
		methods: {
			setEllipsisOnType() {
				try {
					if (this.entitySubTypes.split(" ").length > 1)
						this.$refs.otherTypes.classList.add("ellipsis");
				} catch (error) {}
			},
			callModalCase(theModal) {
				this.$emit("callShowModal", theModal);
			},
			toggleMenu() {
				// Checks if the node is hidden
				if (this.$el.classList.contains("hidden_entity"))
					this.$el.classList.remove("hidden_entity");
				// If it is not hidden, it opens the menu
				else {
					this.menuVisibility = !this.menuVisibility;
					let menu = this;
					function watchMenu() {
						menu.menuVisibility = false;
						if (!this.menuVisibility) {
							try {
								document.removeEventListener("click", watchMenu);
							} catch (error) {}
						}
					}
					if (this.menuVisibility) {
						setTimeout(() => {
							document.addEventListener("click", watchMenu);
						}, 5);
					}
				}
			},
		},
		mounted() {
			this.setEllipsisOnType();
		},
	};
</script>

<!-- .adm .sp .pep .ellipis -->
