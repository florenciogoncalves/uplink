<template>
	<div id="modal">
		<!-- No results -->
		<AlertModal
			id="no_results_modal"
			:modalTitle="'Não houve resultados'"
			:modalSubtitle="'O critério consultado não retornou resultados.\nTente novamente com um documento válido.'" />

		<!-- Sucess delete -->
		<AlertModal
			id="sucess_delete_modal"
			:modalTitle="'Excluir'"
			:modalSubtitle="'O mapa foi excluído com sucesso!\nLembre-se que o mapa foi excluído apenas do arquivo no upLink.'" />

		<!-- Save -->
		<AlertModal
			id="save_confirmation_modal"
			:modalTitle="'Salvar'"
			:modalSubtitle="'O mapa foi salvo com sucesso!\nPara visualizar, clique no botão Arquivo em seguida em Abrir.'" />

		<!-- Back to upMiner -->
		<ConfirmModal
			id="back_to_upminer_modal"
			:modalTitle="'Voltar ao UpMiner'"
			:modalSubtitle="'Tem certeza que deseja sair do upLink e voltar ao upMiner?'"
			:btnNoDisabled="true" />

		<!-- Autosave on load -->
		<ConfirmModal
			id="onload_autosave_modal"
			:modalTitle="'Salvamento automático em andamento'"
			:modalSubtitle="'Ao sair do upLink algumas alterações poderão não ter sido salves.\nDeseja sair assim mesmo?'" />

		<!-- Delete map -->
		<ConfirmModal
			id="delete_map_modal"
			:modalTitle="'Excluir'"
			:modalSubtitle="'Tem certeza que deseja excluir o mapa do seu arquivo no upLink?'" />

		<!-- Fonts on upLink -->
		<CompositeModal
			id="fonts_modal"
			:modalTitle="'Fontes no upLink'"
			:modalSubtitle="'Confira o que cada fonte no upLink pode proporcionar de acordo com as fontes'">
			<div class="modal_division">
				<h5 class="modal_division_subtitle">Consultas Livres</h5>
				<ul>
					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Consulta ao CPF - upLexis</h6>
						<p class="modal_text">
							Vizualizar, exportar ou imprimir dados cadastrais, situação e
							participação societária referente ao CPF consultado.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Consulta ao CNPJ - upLexis</h6>
						<p class="modal_text">
							Visualizar, exportar ou imprimir dados cadastrais, endereço e
							quadro societário relativos ao CNPJ consultado.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Google Maps</h6>
						<p class="modal_text">
							Localização do endereço vinculado no CNPJ consultado.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Matriz/ Filiais - upLexis</h6>
						<p class="modal_text">
							Matriz ou Filiais no mapa gráfico, em forma de nós.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">
							PEP Pessoas Expostas Politicamente - Transparência Brasil
						</h6>
						<p class="modal_text">
							Indica graficamente se a pessoa consultada classifica-se como
							politicamente exposta (PEP), de acordo com a fonte Transparência
							Brasil.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">
							QSA Quadro de Sócios e Administradores - upLexis
						</h6>
						<p class="modal_text">
							Com base na fonte upLexis, exibe Sócios e Administradores no mapa
							gráfico, em forma de nós.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">
							Servidores Públicos - Transparência Brasil
						</h6>
						<p class="modal_text">
							Visualizar, exportar ou imprimir dados de servidores ativos, civis
							e militares, e agentes públicos do Poder Executivo Federal. Não
							estão incluídos na consulta dados sobre servidores aposentados,
							pensionistas ou instituidores de pensão, salvo em caso de estarem
							ativos em razão de exercício de um segundo cargo público, de
							acordo com previsões legais.
						</p>
					</li>
				</ul>
			</div>
			<div class="modal_division">
				<h5 class="modal_division_subtitle">Consultas Pagas</h5>
				<ul>
					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Cheque sem fundo - SPC</h6>
						<p class="modal_text">
							Exibe dados do cadastro nacional de emitentes de cheques sem
							fundos, envolvendo pessoas físicas e jurídicas.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Classe Social/ Renda Presumida</h6>
						<p class="modal_text">
							Visualizar, exportar ou imprimir dados presumidos de renda, classe
							social, escolaridade, estado civil e ocupação da pessoa
							consultada.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Entidades Relacionadas</h6>
						<p class="modal_text">
							Exibe no mapa gráfico os nós de entidades (pessoa física ou
							jurídica) ligados ao nó consultado.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">
							Informações Cadastrais - Big Data Corp
						</h6>
						<p class="modal_text">
							Visualizar, exportar ou imprimir dados cadastrais, endereço e
							participação societária do nó consultado, de acordo com a fonte
							Big Data Corp.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">
							Participação em Empresas com Score - Boa Vista
						</h6>
						<p class="modal_text">
							Visualizar, exportar ou imprimir dados de quadro societário,
							acesso a análise de risco (score), registros de débitos e
							falências empresariais, referentes ao nó consultado.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Participações em Empresas - SPC</h6>
						<p class="modal_text">
							Exibe no mapa gráfico empresas em que o nó consultado tem
							participação, segundo fonte SPC.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">
							PEP Pessoas Expostas Politicamente - upLexis
						</h6>
						<p class="modal_text">
							Indica graficamente se a pessoa consultada classifica-se como
							politicamente exposta (PEP) de acordo com a fonte upLexis.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Protestos - SPC</h6>
						<p class="modal_text">
							Visualizar, exportar ou imprimir dados relativos a protestos, se
							houver, segundo fonte SPC.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">
							QSA Quadro de Sócios e Administradores - Boa Vista
						</h6>
						<p class="modal_text">
							Com base na fonte Boa Vista, exibe Sócios e Administradores no
							mapa gráfico, em forma de nós. Para cada nó, também é possível
							visualizar a porcentagem de participação.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">
							QSA Quadro de Sócios e Administradores - SPC
						</h6>
						<p class="modal_text">
							Com base na fonte SPC, exibe Sócios e Administradores no mapa
							gráfico, em forma de nós. Para cada nó, também é possível
							visualizar a porcentagem de participação.
						</p>
					</li>

					<!-- Item -->
					<li>
						<h6 class="modal_subtitle">Vizinhos</h6>
						<p class="modal_text">
							Exibe no mapa gráfico possíveis vizinhos do nó consultado.
						</p>
					</li>
				</ul>
			</div>
		</CompositeModal>

		<!-- To locate -->
		<CompositeModal
			id="to_locate_modal"
			:modalTitle="'Localizar'"
			:modalSubtitle="'Localize um nó, presente no mapa, através de critérios como\nnome, razão social, CPF ou CNPJ'">
			<ResearchField />
		</CompositeModal>

		<!-- Add modal -->
		<CompositeModal
			id="add_modal"
			:modalTitle="'Adicionar'"
			:modalSubtitle="'Adicione uma nova consulta que pode ou não ter relação com seu\nmapa atual. Você pode utilizar esse recurso para conferir dados.'"
			><Consult :btnRedirect="false" />
		</CompositeModal>

		<!-- Open modal - no results -->
		<CompositeModal
			id="open_no_results_modal"
			:modalTitle="'Abrir'"
			:modalSubtitle="'Ao abrir um mapa salvo anteriormente, as informações\npodem estar desatualizadas'">
			<h5 class="modal_subtitle">Pessoa usuária</h5>
			<input type="text" class="input_text" />
			<h5 class="modal_subtitle">Mapas</h5>
			<p class="modal_text">
				A pessoa selecionada ainda não possui nenhum mapa salvo no upLink.
			</p>
		</CompositeModal>

		<!-- Open modal -->
		<CompositeModal
			id="open_modal"
			:modalTitle="'Abrir'"
			:modalSubtitle="'Ao abrir um mapa salvo anteriormente, as informações\npodem estar desatualizadas'">
			<h5 class="modal_subtitle">Pessoa usuária</h5>
			<input class="input_text consult_data_list" type="text" placeholder="Nome do usuário" />
			<h5 class="modal_subtitle">Mapas</h5>
			<div class="open_modal_maps accordion" id="accordionFather">
				<AccordionItem
					v-for="(item, index) in accordionList"
					:key="index"
					:mapName="accordionList[index].mapName"
					:id="index"
					:mapCreation="{
						date: accordionList[index].mapCreation.date,
						time: accordionList[index].mapCreation.time,
					}"
					:lastModified="{
						date: accordionList[index].lastModified.date,
						time: accordionList[index].lastModified.time,
					}"
					:changedBy="accordionList[index].changedBy"
					:isAuthor="accordionList[index].isAuthor"
					@showModal="showModal" />
			</div>
		</CompositeModal>

		<!-- Save modal -->
		<CompositeModal
			id="save_modal"
			:modalTitle="'Salvar'"
			:modalSubtitle="'Digite um nome para salvar o mapa atual'">
			<input
				class="input_text"
				type="text"
				placeholder="Meu mapa"
				id="map_save_name" />
			<div class="buttons_container">
				<button class="button_text can_close_modal">Cancelar</button>
				<button class="button_primary can_close_modal">Salvar</button>
			</div>
		</CompositeModal>
	</div>
</template>

<script>
	import AlertModal from "./AlertModal.vue";
	import ConfirmModal from "./ConfirmModal.vue";
	import CompositeModal from "./CompositeModal.vue";
	import Consult from "../Consult.vue";
	import ResearchField from "../ResearchField.vue";
	import AccordionItem from "../AccordionItem.vue";

	export default {
		name: "Modals",
		components: {
			AlertModal,
			ConfirmModal,
			CompositeModal,
			Consult,
			ResearchField,
			AccordionItem,
		},
		data() {
			return {
				// Values ​​for test only
				accordionList: [
					{
						mapName: "Júlio dos Santos",
						mapCreation: { date: "20/julho/2022", time: "17:34:59" },
						lastModified: { date: "28/julho/2022", time: "17:34:59" },
						changedBy: "O criador",
						isAuthor: true,
					},
					{
						mapName: "Alberto Anjos",
						mapCreation: { date: "04/06/2000", time: "18:39:23" },
						lastModified: { date: "10/dezembro/2022", time: "15:59:47" },
						changedBy: "O usuário",
						isAuthor: false,
					},
				],
			};
		},
		methods: {
			showModal(theModal) {
				document.querySelector("#modal").style.display = "flex";
				try {
					document
						.querySelector(".onViewingModal")
						.classList.remove("onViewingModal");
				} catch (er) {}
				document.querySelector(`.${theModal}`).classList.add("onViewingModal");
			},
		},
	};
</script>