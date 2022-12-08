<template>
    <div id="container-home-page">
        <div class="container">
					<h2 class="h2">Olá! Você está no upLink</h2>
					<p class="p">
							Consulte por pessoa física ou jurídica para gerar um mapa relacional
					</p>
					<div class="interative-area">
							<div>
								<button class="input-button button-pf"></button>
								<button class="input-button button-pj"></button>
							</div>
							<fieldset class="fieldset-search">
								<input class="" type="text" disabled placeholder="Selecione um critério">
								<button class="input-button search" @click="search()"></button>
							</fieldset>
					</div>
				</div>
    </div>
</template>

<script>
    export  default {
        name: 'HomePage',
		methods: {
			search() {
				document.querySelector('#container-home-page').style.display = 'none'
				document.querySelector('#header_bottom_row #extra-options').classList.toggle('if_onresult')
				document.querySelector('#results-page').classList.toggle('if_onresults')
			}
		},
    }
</script>

<style lang="scss" scoped>
@import "./../assets/scss/colors.scss";
@import "./../assets/scss/borders_and_shadows.scss";

#container-home-page
{
	z-index: 1;
  	padding: 8px 24px;
	box-shadow: $shadow-2;

	background: url(./../assets/images/fox-dashing.svg) no-repeat bottom 25px right 3.5rem, url(./../assets/images/bg-home-page.svg) no-repeat bottom right;
	background-size: 50%;
	background-attachment: fixed;
}

#container-home-page .container
{
	margin-top: 20vh;
	margin-left: 3vw;
}

h2
{
	font-weight: 400;
	line-height: 150%;
}

.interative-area
{
	display: flex;
	margin-top: 25px;
}

.interative-area > div 
{
	display: flex;
}

.button-pf 
{
	margin-right: 8px;
}

@media only screen and (max-width: 576px) {
	#container-home-page
	{
		background-size: 85vw;
	}

	#container-home-page .container
	{
		margin-top: 10vh;
	}
}
</style>