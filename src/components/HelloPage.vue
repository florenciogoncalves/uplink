<template>
    <div id="container-hello-page">
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
								<button class="input-button search"></button>
							</fieldset>
					</div>
				</div>
    </div>
</template>

<script>
    export  default {
        name: 'HelloPage',
    }
</script>

<style lang="scss" scoped>
@import "./../assets/sass/colors.scss";
#container-hello-page
{
	z-index: 1;
  padding: 8px 24px;

	background: url(./../assets/images/fox-dashing.svg) no-repeat bottom 25px right, url(./../assets/images/bg-hello-page.svg) no-repeat bottom right, $color-primary-light;
	background-size: 60vw;
	background-attachment: fixed;
}

#container-hello-page .container
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
	#container-hello-page
	{
		background-size: 85vw;
	}

	#container-hello-page .container
	{
		margin-top: 10vh;
	}
}
</style>