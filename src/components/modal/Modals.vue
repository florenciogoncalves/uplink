<template>
	<div id="modal">
		<!-- No results -->
		<AlertModal
			id="no_results_modal"
			:modalTitle="'Não houve resultados'"
			:modalSubtitle="'O critério consultado não retornou resultados.<br>Tente novamente com um documento válido.'" />

		<!-- Sucess delete -->
		<AlertModal
			id="sucess_delete_modal"
			:modalTitle="'Excluir'"
			:modalSubtitle="'O mapa foi excluído com sucesso!<br>Lembre-se que o mapa foi excluído apenas do arquivo no upLink.'"
			:btnFunction="true"
			@btnDoes="localShowModal('open-modal')" />

		<!-- Save -->
		<AlertModal
			id="save_confirmation_modal"
			:modalTitle="'Salvar'"
			:modalSubtitle="'O mapa foi salvo com sucesso!<br>Para visualizar, clique no botão Arquivo em seguida em Abrir.'" />

		<!-- Back to upMiner -->
		<ConfirmModal
			id="back_to_upminer_modal"
			:modalTitle="'Voltar ao UpMiner'"
			:modalSubtitle="'Tem certeza que deseja sair do upLink e voltar ao upMiner?'"
			:btnYesFunction="true"
			@btnYesDoes="checkAutosave" />

		<!-- Autosave on load -->
		<ConfirmModal
			id="onload_autosave-modal"
			:modalTitle="'Salvamento automático em andamento'"
			:modalSubtitle="'Ao sair do upLink algumas alterações poderão não ter sido salves.<br>Deseja sair assim mesmo?'" />

		<!-- Delete map -->
		<ConfirmModal
			id="delete_map_modal"
			:modalTitle="'Excluir'"
			:modalSubtitle="'Tem certeza que deseja excluir o mapa do seu arquivo no upLink?'"
			:btnYesFunction="true"
			:btnNoFunction="true"
			@btnNoDoes="localShowModal('open-modal')"
			@btnYesDoes="localShowModal('sucess_delete_modal')" />

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
			:modalSubtitle="'Localize um nó, presente no mapa, através de critérios como<br>nome, razão social, CPF ou CNPJ'">
			<ResearchField />
		</CompositeModal>

		<!-- Add modal -->
		<CompositeModal
			id="add-modal"
			:modalTitle="'Adicionar'"
			:modalSubtitle="'Adicione uma nova consulta que pode ou não ter relação com seu<br>mapa atual. Você pode utilizar esse recurso para conferir dados.'"
			><PersonSearchField :btnRedirect="false" />
		</CompositeModal>

		<!-- Open modal - no results -->
		<CompositeModal
			id="open_no_results_modal"
			:modalTitle="this.sameModal == true ? 'Excluir' : 'Abrir'"
			:modalSubtitle="
				this.sameModal == true
					? 'Você só poderá excluir os mapas dos quais tiver autoria.'
					: 'Ao abrir um mapa salvo anteriormente, as informações<br>podem estar desatualizadas'
			">
			<h5 class="modal_subtitle">Pessoa usuária</h5>
			<input
				class="input_text consult_data_list"
				type="text"
				placeholder="Nome do usuário" />
			<h5 class="modal_subtitle">Mapas</h5>
			<p class="modal_text">
				A pessoa selecionada ainda não possui nenhum mapa salvo no upLink.
			</p>
		</CompositeModal>

		<!-- Open modal -->
		<CompositeModal
			id="open-modal"
			:modalTitle="this.sameModal == true ? 'Excluir' : 'Abrir'"
			:modalSubtitle="
				this.sameModal == true
					? 'Você só poderá excluir os mapas dos quais tiver autoria.'
					: 'Ao abrir um mapa salvo anteriormente, as informações<br>podem estar desatualizadas'
			">
			<h5 class="modal_subtitle">Pessoa usuária</h5>
			<input
				class="input_text consult_data_list"
				type="text"
				placeholder="Nome do usuário" />
			<h5 class="modal_subtitle">Mapas</h5>
			<div class="open-modal_maps accordion" id="openAccordion">
				<AccordionItem
					accordionContainer="openAccordion"
					v-for="(item, index) in listSavedMaps"
					:key="index"
					:mapName="listSavedMaps[index].mapName"
					:id="index"
					:mapCreation="{
						date: listSavedMaps[index].mapCreation.date,
						time: listSavedMaps[index].mapCreation.time,
					}"
					:lastModified="{
						date: listSavedMaps[index].lastModified.date,
						time: listSavedMaps[index].lastModified.time,
					}"
					:changedBy="listSavedMaps[index].changedBy"
					:isAuthor="listSavedMaps[index].isAuthor"
					@showModal="localShowModal" />
			</div>
		</CompositeModal>

		<!-- Save modal -->
		<CompositeModal
			id="save-modal"
			:modalTitle="'Salvar'"
			:modalSubtitle="'Digite um nome para salvar o mapa atual'">
			<input
				class="input_text"
				type="text"
				placeholder="Meu mapa"
				id="map_save_name" />
			<div class="buttons_container">
				<button class="button-text can_close_modal">Cancelar</button>
				<button
					class="button-primary"
					@click="localShowModal('save_confirmation_modal')">
					Salvar
				</button>
			</div>
		</CompositeModal>

		<!-- CPF query -->
		<CompositeModal id="cpf_query_modal" modalTitle="Consulta ao CPF - upLexis">
			<div class="cpf_query_btns">
				<button class="button file_upload_2"></button>
				<button class="button print"></button>
			</div>
			<h1>Dados Cadastrais - Título do bloco</h1>
			<hr />
			<div class="content_area">
				<div class="content_separator">
					<div class="content_top">
						<h3 class="data_title text_color">CPF</h3>
						<span class="data_value">333.663.993-99</span>
					</div>
					<div class="content_botton">
						<h3 class="data_title">Situação</h3>
						<span class="data_value">Regular</span>
					</div>
				</div>
				<div class="content_separator">
					<div class="content_top">
						<h3 class="data_title text_color">Nome</h3>
						<span class="data_value">Joanne Angelina Germano</span>
					</div>
					<div class="content_botton">
						<h3 class="data_title">Data da consulta</h3>
						<span class="data_value">05/11/2022</span>
					</div>
				</div>
				<div class="content_separator">
					<div class="content_top">
						<h3 class="data_title">Data de Nascimento</h3>
						<span class="data_value">05/04/1976</span>
					</div>
					<div class="content_botton">
						<h3 class="data_title">Cidade/Estado</h3>
						<span class="data_value">Curitiba - PR</span>
					</div>
				</div>
			</div>
			<hr />
			<h1>Participação Societária</h1>
			<div class="content_area">
				<div class="content_separator">
					<div class="content_top">
						<h3 class="data_title">CNPJ</h3>
						<span class="data_value">11.111.991/0001-11</span>
					</div>
					<div class="content_botton">
						<h3 class="data_title">Entrada</h3>
						<span class="data_value">07/01/2021</span>
					</div>
				</div>
				<div class="content_separator">
					<div class="content_top">
						<h3 class="data_title">Razão Social</h3>
						<span class="data_value">Capybara’s Palace</span>
					</div>
					<div class="content_botton">
						<h3 class="data_title">Qualificação</h3>
						<span class="data_value">Sócio</span>
					</div>
				</div>
				<div class="content_separator">
					<div class="content_top">
						<h3 class="data_title"></h3>
						<span class="data_value"></span>
					</div>
					<div class="content_botton">
						<h3 class="data_title">Participação</h3>
						<span class="data_value">100%</span>
					</div>
				</div>
			</div>
			<hr />
		</CompositeModal>

		<!-- Comment -->
		<CompositeModal
			id="comment_modal"
			modalTitle="Comentar"
			modalSubtitle="Adicione um comentário no mapa">
			<h3>Nó selecionado</h3>
			<Node
				entityType="physical"
				:entityName="'Sandra Pérola'"
				:entityCPF="'334.664.993-49'"
				class="in_comments"
				:disableMenu="true" />
			<h3>Comentário</h3>
			<form>
				<textarea
					:placeholder="
						'Dado dinâmico' +
						' possui 15% de participação na empresa ' +
						'Dado dinâmico'
					"
					required></textarea>
				<div class="buttons_container">
					<button class="button-text can_close_modal">Cancelar</button>
					<button class="button-primary">Salvar</button>
				</div>
			</form>
		</CompositeModal>

		<!-- All comments -->
		<CompositeModal
			id="all_comments_modal"
			modalTitle="Comentários"
			modalSubtitle="Para adicionar um novo comentário, clique na entidade,<br> em seguida Editar, Comentar">
			<h3>Entidade</h3>
			<Node
				entityType="physical"
				:entityName="'Sandra Pérola'"
				:entityCPF="'334.664.993-49'"
				class="in_comments" />
			<h3>Comentários</h3>

			<div class="open-modal_maps accordion" id="commentsAccordion">
				<AccordionItem
					accordionContainer="commentsAccordion"
					:textArea="true"
					v-for="(item, index) in comments"
					:key="index"
					:mapName="comments[index].description"
					:id="index"
					:mapCreation="{
						date: comments[index].creation.date,
						time: comments[index].creation.time,
					}"
					:lastModified="{
						date: comments[index].lastModified.date,
						time: comments[index].lastModified.time,
					}"
					:changedBy="comments[index].changedBy"
					:isAuthor="comments[index].isAuthor"
					@showModal="localShowModal" />
			</div>
		</CompositeModal>
	</div>
</template>

<script>
	import AlertModal from "./AlertModal.vue";
	import ConfirmModal from "./ConfirmModal.vue";
	import CompositeModal from "./CompositeModal.vue";
	import PersonSearchField from "../PersonSearchField.vue";
	import ResearchField from "../ResearchField.vue";
	import AccordionItem from "../AccordionItem.vue";
	import Node from "../entity/Node.vue";

	export default {
		name: "Modals",
		components: {
			AlertModal,
			ConfirmModal,
			CompositeModal,
			PersonSearchField,
			ResearchField,
			AccordionItem,
			Node,
		},
		data() {
			return {
				// Define different values ​​for identical <CompositeModals/>
				sameModal: true,

				// Test values ​​for the map
				listSavedMaps: [
					{
						mapName: "Nome do usuário",
						mapCreation: { date: "20/julho/2022", time: "17:34:59" },
						lastModified: { date: "28/julho/2022", time: "17:34:59" },
						changedBy: "O criador",
						isAuthor: true,
					},
					{
						mapName: "Nome do usuário",
						mapCreation: { date: "04/06/2000", time: "18:39:23" },
						lastModified: { date: "10/dezembro/2022", time: "15:59:47" },
						changedBy: "O usuário",
						isAuthor: false,
					},
				],
				comments: [
					{
						description:
							"Sandra Pérola possui 50% de participação em Ice Pink, onde atua como gestora.",
						creation: { date: "20/julho/2022", time: "17:34:59" },
						lastModified: { date: "28/julho/2022", time: "17:34:59" },
						changedBy: "O criador",
						isAuthor: true,
					},
					{
						description:
							"Sandra Pérola possui 50% de participação em Ice Pink, onde atua como gestora.",
						creation: { date: "04/06/2000", time: "18:39:23" },
						lastModified: { date: "10/dezembro/2022", time: "15:59:47" },
						changedBy: "O usuário",
						isAuthor: false,
					},
				],
			};
		},
		methods: {
			localShowModal(theModal, sameModal = false) {
				document.querySelector("#modal").style.display = "flex";
				try {
					document.querySelector(".on_modal").classList.remove("on_modal");
				} catch (error) {}
				// if you're trying to open the 'open' modal, and you don't have any maps saved
				if (theModal == "open-modal" && this.listSavedMaps.length <= 0)
					theModal = "open_no_results_modal";
				setTimeout(() => {
					document.querySelector(`#${theModal}`).classList.add("on_modal");
				}, 5);
				if (sameModal) {
					this.sameModal = true;
				} else this.sameModal = false;
			},
			checkAutosave() {
				if (sessionStorage.autoSave == "ativado")
					this.localShowModal("onload_autosave-modal");
				else this.closeModal();
			},
			closeModal() {
				document.querySelector(".on_modal").classList.remove("on_modal");
				document.querySelector("#modal").style.display = "none";
			},
		},
		mounted() {
			// All buttons that can close the modal
			document.querySelectorAll(".can_close_modal").forEach((btn) => {
				btn.addEventListener("click", () => {
					document.querySelector(".on_modal").classList.remove("on_modal");
					document.querySelector("#modal").style.display = "none";
				});
			});
		},
	};
</script>
