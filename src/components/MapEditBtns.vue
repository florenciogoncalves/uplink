<template>
	<div class="map_edit_btns">
		<button :disabled="!isAuthor" @click="$emit('showModal', 'delete_map_modal')" class="delete"></button>
		<button :disabled="!isAuthor" class="edit"></button>
		<button class="open_in_new"></button>
	</div>
</template>

<script>
	export default {
		name: "MapEditBtns",
		props: {
			isAuthor: Boolean,
		},
	};
</script>


