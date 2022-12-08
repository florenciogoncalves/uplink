<template>

	
    <div id="modal">

			<!-- Back to upMiner -->
      <div class="modal-simple">
				<div class="fox-head-logo"></div>
				<h4 class="h4"> {{ voltarUpMiner.title }} </h4>
				<p class="p-2"> {{ voltarUpMiner.message }} </p>
				<div class="buttons-container">
					<button class="button-text can_close_modal" disabled>Não</button>
					<button class="button-primary can_close_modal">Sim</button>
				</div>
				<button class="close-modal can_close_modal"></button>
			</div>

		<!-- Fonts on upLink -->
		<div  id="modal-fonts" class="modal-content">
			<header id="modal_header">
				<h4 class="h4"> {{ fontesUpLink.title }} </h4>
				<button class="close-modal can_close_modal"></button>
			</header>

			<div id="_modal_container">
				<p class="modal_subtitle txt-center"> {{ fontesUpLink.message }} </p>
				<div class="modal_division">
					<h5 class="modal_division_subtitle">Consultas Livres</h5>
					<ul>
						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Consulta ao CPF - upLexis</h6>
							<p class="modal_text">Vizualizar, exportar ou imprimir dados cadastrais, situação e participação societária referente ao CPF consultado.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Consulta ao CNPJ - upLexis</h6>
							<p class="modal_text">Visualizar, exportar ou imprimir dados cadastrais, endereço e quadro societário relativos ao CNPJ consultado.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Google Maps</h6>
							<p class="modal_text">Localização do endereço vinculado no CNPJ consultado.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Matriz/ Filiais - upLexis</h6>
							<p class="modal_text">Matriz ou Filiais no mapa gráfico, em forma de nós.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">PEP Pessoas Expostas Politicamente - Transparência Brasil</h6>
							<p class="modal_text">Indica graficamente se a pessoa consultada classifica-se como politicamente exposta (PEP), de acordo com a fonte Transparência Brasil.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">QSA Quadro de Sócios e Administradores - upLexis</h6>
							<p class="modal_text">Com base na fonte upLexis, exibe Sócios e Administradores no mapa gráfico, em forma de nós.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Servidores Públicos - Transparência Brasil</h6>
							<p class="modal_text">Visualizar, exportar ou imprimir dados de servidores ativos, civis e militares, e agentes públicos do Poder Executivo Federal. Não estão incluídos na consulta dados sobre servidores aposentados, pensionistas ou instituidores de pensão, salvo em caso de estarem ativos em razão de exercício de um segundo cargo público, de acordo com previsões legais.</p>
						</li>

					</ul>
				</div>
				<div class="modal_division">
					<h5 class="modal_division_subtitle">Consultas Pagas</h5>
					<ul>
						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Cheque sem fundo - SPC</h6>
							<p class="modal_text">Exibe dados do cadastro nacional de emitentes de cheques sem fundos, envolvendo pessoas físicas e jurídicas.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Classe Social/ Renda Presumida</h6>
							<p class="modal_text">Visualizar, exportar ou imprimir dados presumidos de renda, classe social, escolaridade, estado civil e ocupação da pessoa consultada.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Entidades Relacionadas</h6>
							<p class="modal_text">Exibe no mapa gráfico os nós de entidades (pessoa física ou jurídica) ligados ao nó consultado.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Informações Cadastrais - Big Data Corp</h6>
							<p class="modal_text">Visualizar, exportar ou imprimir dados cadastrais, endereço e participação societária do nó consultado, de acordo com a fonte Big Data Corp.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Participação em Empresas com Score - Boa Vista</h6>
							<p class="modal_text">Visualizar, exportar ou imprimir dados de quadro societário, acesso a análise de risco (score), registros de débitos e falências empresariais, referentes ao nó consultado.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Participações em Empresas - SPC</h6>
							<p class="modal_text">Exibe no mapa gráfico empresas em que o nó consultado tem participação, segundo fonte SPC.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">PEP Pessoas  Expostas Politicamente - upLexis</h6>
							<p class="modal_text">Indica graficamente se a pessoa consultada classifica-se como politicamente exposta (PEP) de acordo com a fonte upLexis.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Protestos - SPC</h6>
							<p class="modal_text">Visualizar, exportar ou imprimir dados relativos a protestos, se houver, segundo fonte SPC.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">QSA Quadro de Sócios e Administradores - Boa Vista</h6>
							<p class="modal_text">Com base na fonte Boa Vista, exibe Sócios e Administradores no mapa gráfico, em forma de nós. Para cada nó, também é possível visualizar a porcentagem de participação.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">QSA Quadro de Sócios e Administradores - SPC</h6>
							<p class="modal_text">Com base na fonte SPC, exibe Sócios e Administradores no mapa gráfico, em forma de nós. Para cada nó, também é possível visualizar a porcentagem de participação.</p>
						</li>

						<!-- Item -->
						<li>
							<h6 class="modal_subtitle">Vizinhos</h6>
							<p class="modal_text">Exibe no mapa gráfico possíveis vizinhos do nó consultado.</p>
						</li>
					</ul>
				</div>
			</div>

		</div>

		<div  id="modal-fonts" class="modal-content">
			<div class="fox-head-logo"></div>
			<h4 class="h4"> {{ modalAlerta.title }} </h4>
			<p class="p-2"> {{ modalAlerta.message }} </p>
			<div class="buttons-container">
				<button class="button-text" disabled>Não</button>
				<button class="button-primary">Sim</button>
			</div>
			<button class="close-modal"></button>
		</div>

		<div id="modal-find" class="modal-content">

		</div>

    </div>
</template>

<script>
export default 
{
  name: 'Modals',
  data() {
	return {
		voltarUpMiner: {
			title: 'Voltar ao UpMiner',
			message: 'Tem certeza que deseja sair do upLink e voltar ao upMiner?'
		},
		fontesUpLink: {
			title: 'Fontes no upLink',
			message: 'Confira o que cada fonte no upLink pode proporcionar de acordo com as fontes'
		},
		modalAlerta: {
			title: 'Não houve ',
			message: 'Confira o que cada fonte no upLink pode proporcionar de acordo com as fontes'
		}
	}
  }
}

</script>