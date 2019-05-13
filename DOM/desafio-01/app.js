new Vue({
    el: '#desafio',
    data: {
        nome: "Leonardo Abreu",
        idade: 23,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png"
    },
    methods: {
        numRand() {
            return Math.random()            
        }
    }
})