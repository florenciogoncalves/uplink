<template>
	<div id="container_home_page">
		<div class="container">
			<h2 class="h2">Olá! Você está no upLink</h2>
			<p class="p">
				Consulte por pessoa física ou jurídica para gerar um mapa relacional
			</p>
			<Consult />
		</div>
	</div>
</template>

<script>
	import Consult from "../Consult.vue";
	export default {
		components: { Consult },
		name: "HomePage",
		mounted() {
			this.$emit("onResult", false);
		},
	};

</script>

<style lang="scss">
	@import "./../../assets/scss/colors.scss";
	@import "./../../assets/scss/borders_and_shadows.scss";

	#container_home_page {
		z-index: 1;
		padding: 8px 24px;
		box-shadow: $shadow-2;

		background: url(./../../assets/images/fox-dashing.svg) no-repeat bottom 25px
				right 3.5rem,
			url(./../../assets/images/bg-home-page.svg) no-repeat bottom right;
		background-size: 50%;
		background-attachment: fixed;
	}

	#container_home_page .container {
		margin-top: 20vh;
		margin-left: 3vw;

		h2 {
			font-weight: 400;
			line-height: 150%;
		}

		.interative_area {
			display: flex;
			margin-top: 25px;
		}

		.interative_area > div {
			display: flex;
		}

		.button_pf {
			margin-right: 8px;
		}

		@media only screen and (max-width: 576px) {
			#container_home_page {
				background-size: 85vw;
			}

			#container_home_page .container {
				margin-top: 10vh;
			}
		}
	}
	.interative_area {
		display: flex;
	}
</style>
