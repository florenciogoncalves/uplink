import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')


const pf = document.querySelector('.button-pf')
const pj = document.querySelector('.button-pj')
const fieldset = document.querySelector('.fieldset-search')
const input = fieldset.querySelector('input')
const button = fieldset.querySelector('button')

pf.addEventListener('click', () => {
	
	pf.className += ' actived'
	if(pj.classList.contains('actived'))
		pj.classList.remove('actived')
	if(!fieldset.classList.contains('actived'))
		fieldset.classList.toggle('actived')
	try {
		input.removeAttribute('disabled')
	}
	catch(error){
		console.error(error)
	}
	input.value =''
	input.blur()
	input.setAttribute('placeholder', 'Digite o CPF ou o Nome Completo')
})

pj.addEventListener('click', () => {
	
	if(!pj.className.match('actived'))
		pj.className += ' actived'
	if(pf.classList.contains('actived'))
		pf.classList.remove('actived')
	if(!fieldset.classList.contains('actived'))
		fieldset.classList.toggle('actived')
	try {
		input.removeAttribute('disabled')
	}
	catch(error){
		console.error(error)
	}
	input.value =''
	input.blur()
	input.setAttribute('placeholder', 'Digite o CNPJ ou a Razão Social')
})

input.addEventListener('focus', () => {
	if (!fieldset.classList.contains('focus'))
		fieldset.classList.toggle('focus')
	if(pf.classList.contains('actived'))
		input.setAttribute('placeholder', 'Joanne Angelina Germano')
	else if (pj.classList.contains('actived'))
		input.setAttribute('placeholder', 'Rei do Hamburguer')
	
})

input.addEventListener('blur', () => {
	if (fieldset.classList.contains('focus'))
		fieldset.classList.toggle('focus')
	if(pf.classList.contains('actived'))
		input.setAttribute('placeholder', 'Digite o CPF ou o Nome Completo')
	else if (pj.classList.contains('actived'))
		input.setAttribute('placeholder', 'Digite o CNPJ ou a Razão Social')
})


document.querySelectorAll('.close-modal').forEach(element => {
	element.addEventListener('click', () =>
{
	document.querySelector('#modal').style.display = 'none'
})
});

document.querySelector('.apps').addEventListener('click', () =>
{
	document.querySelector('#modal').style.display = 'flex'
})