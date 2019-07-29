export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maça', 'laraja']
        }
    },
    methods: {
        add(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}