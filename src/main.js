import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");


	// All buttons that can close the modal
	document.querySelectorAll('.can_close_modal').forEach((btn) => {
		btn.addEventListener('click', () => {
			document.querySelector('.on_modal').classList.remove('on_modal')
			document.querySelector('#modal').style.display = 'none'
		})
	})