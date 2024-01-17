<template>
	<div class="map_edit_btns">
		<button :disabled="!isAuthor" @click="$emit('showModal', 'delete_map_modal')" class="delete"></button>
		<button :disabled="!isAuthor" @click="$emit('editMapName')" class="edit"></button>
		<button class="open_in_new can_close_modal" @click="closeDropdowns"></button>
	</div>
</template>

<script>
	export default {
		name: "MapEditBtns",
		props: {
			isAuthor: Boolean,
		},
		methods: {
			closeDropdowns() {
				setTimeout(() => {
				document.querySelector('body').click()
				this.$router.push('/results')
				}, 2)
			}
		},
	};
</script>


