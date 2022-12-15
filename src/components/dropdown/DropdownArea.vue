<template>
	<div class="dropdown_area">
		<DropdownButton
			:setBtnTitle="btnTitle"
			:class="btnClass"
			:id="btnId"
			:tooltipSide="setTooltipSide"
			@click="toggle_dropdown($event)"></DropdownButton>
		<Dropdown :class="'dropdown_' + btnClass" v-show="isDropdownShow">
			<slot></slot>
		</Dropdown>
	</div>
</template>

<script>
	import Dropdown from "./Dropdown.vue";
	import DropdownButton from "./DropdownButton.vue";
	export default {
		name: "DropdownArea",
		components: {
			Dropdown,
			DropdownButton,
		},
		data() {
			return {
				isDropdownShow: false,
			};
		},
		props: {
			btnClass: String,
			btnTitle: String,
			btnId: String,
			setTooltipSide: String
		},
		methods: {
			toggle_dropdown(e) {
				let el = this;
				this.isDropdownShow = !this.isDropdownShow;
				if (this.isDropdownShow) {
					document.addEventListener("click", closeDropdown);
					el.$el.classList.add('on_dropdown')

					function closeDropdown(evt) {
						if (!el.$el.contains(evt.target) && !document.querySelector('#modal').contains(evt.target)) {
					el.$el.classList.remove('on_dropdown')
							el.isDropdownShow = false;
							document.removeEventListener('click', closeDropdown)
						}
					}
				}
			},
		},
	};
</script>
