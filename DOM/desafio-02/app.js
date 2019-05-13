new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Aparecendo um Alerta')
        },
        armazenar(event) {
            this.valor = event.target.value
        },
    },
})