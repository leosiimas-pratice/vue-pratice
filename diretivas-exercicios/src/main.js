import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode){

		const aplicarCor = cor => {
			if(binding.arg == 'fundo'){
				el.style.backgroundColor = cor
			} else {
				el.style.color = cor
			}
		}

		let atraso = 0
		if(binding.modifiers['atrasar']) atraso = 3000
		if(binding.modifiers['alternar']) {
			
		}

		setTimeout(() => {
			aplicarCor(binding.value);				
		}, atraso);
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
