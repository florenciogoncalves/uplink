<template>
    <div id="modal" class="modal-alerta">
        <div  class="modal-simple">
					<div class="fox-head-logo"></div>
					<h4 class="h4">Voltar ao UpMiner</h4>
					<p class="p-2">Tem certeza que deseja sair do upLink e voltar ao upMiner?</p>
					<div class="buttons-container">
						<button class="button-text" disabled>Não</button>
						<button class="button-primary">Sim</button>
					</div>
					<button class="close-modal"></button>
				</div>
    </div>
</template>

<script>
import { createApp } from '@vue/runtime-dom'

export default 
{
  name: 'Modals'
}

</script>