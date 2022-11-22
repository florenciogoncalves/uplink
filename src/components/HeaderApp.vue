<template>
	<div id="header">
		<div id="header_top_row">
			<img class="header_logo" src="./../../public/logo.svg" alt="">
			<div id="header__buttons">
				<button class="empty-button help"></button>
				<button class="empty-button apps"></button>
			</div>
		</div>
		<div id="header_bottom_row">
			<div id="header__buttons">
				<button class="empty-button search"></button>
				<button class="empty-button menu"></button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderApp'
}
</script>

<style lang="scss" scoped>
@import "./../assets/sass/colors.scss";
@import "./../assets/sass/borders_and_shadows.scss";
#header{
	position: sticky;
	top: 0;
	z-index: 3;
	box-shadow: $shadow-2;
}


#header_bottom_row,
#header_top_row 
{
	padding: 0 24px;
	display: flex;
	align-items: center;
	height: 48px;
	max-height: 48px;
	box-sizing: border-box;
}


#header__buttons 
{
	display: flex;
	align-items: center;
}

#header_top_row .empty-button
{
	height: 48px;
	width: 48px;
	background-size: 24px;
}

#header_top_row .empty-button:hover
{
	background-color: invert($color-primary-dark);
	filter: invert(1);
	transition: all ease-in-out 300ms;
}

#header_top_row 
{
	display: grid;
	grid-template-columns: auto auto;
	justify-content: space-between;

	background: $color-neutral-white-pure;
}

#header_bottom_row
{
	width: 100%;
	background: $color-primary-light;
}

.empty-button.help
{
	margin-right: 0;
}
</style>
